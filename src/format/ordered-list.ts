import { FormatStateEnum } from "../enum/format-state";
import { AppDispatch } from "../redux/store";
import { SelectionType } from "../types/selection_type";
import { addTabSpace } from "./canvas";
import SharedFormat from "./shared";

function onClick(dispatch: AppDispatch, range: Range) {
  SharedFormat.applyFormat(
    dispatch,
    range,
    "insertOrderedList",
    FormatStateEnum.OrderedList,
  );
}

function handleTab() {
  const selection = document.getSelection();
  console.log("by node", selection?.getRangeAt(0));
  const range = selection?.getRangeAt(0);
  const selection_type: SelectionType = selection?.type as SelectionType;
  const node = range?.startContainer.nodeName;
  if (selection_type == "Caret" && node == "LI" && range?.startOffset == 0) {
    const list_element = document.createElement("ol");
    const child_element = document.createElement("li");
    list_element.appendChild(child_element);
    range.startContainer.parentNode?.removeChild(range.startContainer);
    range.insertNode(list_element);
    return;
  } else {
    addTabSpace();
  }
}

const OrderedListFormat = {
  onClick,
  handleTab,
};

export default OrderedListFormat;
