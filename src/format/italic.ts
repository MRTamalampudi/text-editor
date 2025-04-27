import { FormatStateEnum } from "../enum/format-state";
import { SelectionModel } from "../models/selection";
import { AppDispatch } from "../redux/store";
import SharedFormat from "./shared";

function onClick(dispatch: AppDispatch, range: Range) {
  SharedFormat.applyFormat(dispatch, range, "italic", FormatStateEnum.Bold);
}

const ItalicFormat = {
  onClick,
};

export default ItalicFormat;
