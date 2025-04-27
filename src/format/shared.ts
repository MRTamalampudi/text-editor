import { FormatStateEnum } from "../enum/format-state";
import { SelectionModel } from "../models/selection";
import { AppDispatch } from "../redux/store";

function applyFormat(
  dispatch: AppDispatch,
  range: Range,
  command:
    | "bold"
    | "italic"
    | "underline"
    | "insertUnorderedList"
    | "insertOrderedList", // You can extend this easily
  format: FormatStateEnum,
) {
  const selection = document.getSelection();
  if (!selection) return;

  selection.removeAllRanges();
  selection.addRange(range);

  document.execCommand(command);

  dispatch({ type: "formatState/update", payload: format });

  const selectionModel = new SelectionModel();
  selectionModel.range = selection.getRangeAt(0);

  dispatch({ type: "selection/update", payload: selectionModel });
}

const SharedFormat = {
  applyFormat,
};

export default SharedFormat;
