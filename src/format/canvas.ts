import React from "react";
import { SelectionModel } from "../models/selection";
import { AppDispatch } from "../redux/store";
import { SelectionType } from "../types/selection_type";
import { DOCUMENT_SELECTION } from "../utils/consts";
import UnorderedListFormat from "./unorderd-list";
import OrderedListFormat from "./ordered-list";

export function onKeyDown(event: React.KeyboardEvent, dispatch: AppDispatch) {
  handleTab(event);
  handleShortcuts(event);
  updateFormatState(dispatch);
  handleEnter(event);
  checkforDoubleSlash();
  const sele = document.getSelection();
  const model = new SelectionModel();
  model.range = sele?.getRangeAt(0);
  dispatch({ type: "selection/update", payload: model });
}

function checkforDoubleSlash() {
  setTimeout(() => {
    const selection = DOCUMENT_SELECTION;
    const range = selection?.getRangeAt(0);
    const node = range?.startContainer;
    const text = node?.textContent?.substring(0, range!.startOffset) || "";
    if (text.endsWith("//time")) {
      insertLocalTime(node!);
    }
  }, 0);
}

function insertLocalTime(node: Node) {
  const selection = document.getSelection();
  if (!selection) return;
  const fullText = node.textContent || "";
  const newText = fullText.slice(0, fullText.length - 6); // "//time" = 6 chars
  const now = new Date();
  const timeString = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  node.textContent = newText + timeString;

  setTimeout(() => {
    const newRange = document.createRange();
    newRange.setStart(node, (newText + timeString).length);
    newRange.collapse(true);

    selection.removeAllRanges();
    selection.addRange(newRange);
  }, 0);
}

export function onMouseUP(event: React.MouseEvent, dispatch: AppDispatch) {
  updateFormatState(dispatch);
  const sele = document.getSelection();
  const model = new SelectionModel();
  model.range = sele?.getRangeAt(0);
  dispatch({ type: "selection/update", payload: model });
}

function handleTab(event: React.KeyboardEvent) {
  if (event.key === "Tab") {
    event.preventDefault();
    const selection = document.getSelection();
    const range = selection?.getRangeAt(0);
    const node = range?.startContainer;
    if (node?.nodeName == "LI") {
      if (node.parentNode?.nodeName == "UL") {
        UnorderedListFormat.handleTab();
        return;
      } else if (node.parentNode?.nodeName == "OL") {
        OrderedListFormat.handleTab();
        return;
      }
    }
    addTabSpace();
  }
}

function handleEnter(event: React.KeyboardEvent) {
  if (event.key !== "Enter") {
    return;
  }
  const selection = document.getSelection();
  const range = selection?.getRangeAt(0);
  const node = range?.startContainer;
  if (
    node?.nodeName == "BLOCKQUOTE" ||
    node?.parentNode?.nodeName == "BLOCKQUOTE"
  ) {
    const element = document.createElement("br");
    range?.insertNode(element);
    setTimeout(() => {
      const newRange = document.createRange();
      newRange.setStartAfter(element);
      newRange.setEndAfter(element);
      selection?.removeAllRanges();
      selection?.addRange(newRange);
    }, 0);
    event.preventDefault();
  }
}

export function addTabSpace() {
  const selection = DOCUMENT_SELECTION;
  const range = selection?.getRangeAt(0);
  const selection_type = selection?.type as SelectionType;
  if (selection_type == "Range") {
    range?.deleteContents();
  }
  const tabNode = document.createTextNode("\u00A0\u00A0\u00A0\u00A0");
  range?.insertNode(tabNode);

  //Set cursor at the end of insertNode
  setTimeout(() => {
    const newRange = document.createRange();
    newRange.setStartAfter(tabNode);
    newRange.setEndAfter(tabNode);
    selection?.removeAllRanges();
    selection?.addRange(newRange);
  }, 0);
}

function updateFormatState(dispatch: AppDispatch) {
  const selection = DOCUMENT_SELECTION;
  const range = selection?.getRangeAt(0);
  const node = range?.startContainer;
  const parent_nodes = collectParentNodesUptoDiv(node!);
  console.log(parent_nodes);
  dispatch({ type: "formatState/updateByNodeName", payload: parent_nodes });
}

function collectParentNodesUptoDiv(node: Node): string[] {
  if (node.parentNode?.nodeName == "DIV") return [];
  return [
    node.parentNode!.nodeName,
    ...collectParentNodesUptoDiv(node.parentNode!),
  ];
}

function handleShortcuts(event: React.KeyboardEvent) {
  // metaKey is for mac
  const isCtrlOrCmd = event.ctrlKey || event.metaKey;
  const isShiftPressed = event.shiftKey;
  if (isCtrlOrCmd && !isShiftPressed) {
    if (event.key.toLowerCase() === "b") {
      event.preventDefault();
      document.execCommand("bold");
      if (event.key.toLowerCase() === "i") {
        event.preventDefault();
        document.execCommand("italic");
      }
      if (event.key.toLowerCase() === "u") {
        event.preventDefault();
        document.execCommand("underline");
      }
    }
  }
}

const CanvasFormat = {
  onKeyDown,
  onMouseUP,
  handleTab,
};

export default CanvasFormat;
