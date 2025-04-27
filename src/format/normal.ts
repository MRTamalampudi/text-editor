import { FormatStateEnum } from "../enum/format-state";
import { AppDispatch } from "../redux/store";

function onClick(dispatch: AppDispatch, range: Range) {
  const selection = document.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
  document.execCommand("bold");
  dispatch({ type: "formatState/update", payload: FormatStateEnum.CodeBlock });
}

const NormalFormat = {
  onClick,
};

export default NormalFormat;
