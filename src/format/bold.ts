import { FormatStateEnum } from "../enum/format-state";
import { SelectionModel } from "../models/selection";
import { AppDispatch } from "../redux/store";
import SharedFormat from "./shared";

function onClick(dispatch: AppDispatch, range: Range) {
  SharedFormat.applyFormat(dispatch, range, "bold", FormatStateEnum.Bold);
}

const BoldFormat = {
  onClick,
};

export default BoldFormat;
