import { FormatStateEnum } from "../enum/format-state";
import { AppDispatch } from "../redux/store";
import SharedFormat from "./shared";

function onClick(dispatch: AppDispatch, range: Range) {
  SharedFormat.applyFormat(
    dispatch,
    range,
    "underline",
    FormatStateEnum.Underline,
  );
}

const UnderlineFormat = {
  onClick,
};

export default UnderlineFormat;
