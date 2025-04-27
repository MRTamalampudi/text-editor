import { createRoot } from "react-dom/client";
import { FormatStateEnum } from "../enum/format-state";
import { AppDispatch } from "../redux/store";
import { Blockquote, MantineProvider } from "@mantine/core";
import theme from "../theme";

function onClick(dispatch: AppDispatch, range: Range) {
  const selection = document.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
  document.execCommand("bold");
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(
    <MantineProvider theme={theme}>
      <Blockquote />
    </MantineProvider>,
  );
  range.insertNode(div);
  setTimeout(() => {
    const newRange = document.createRange();
    newRange.setStartAfter(div.firstChild!);
    newRange.setEndAfter(div.firstChild!);
    selection?.removeAllRanges();
    selection?.addRange(newRange);
  }, 0);
  dispatch({ type: "formatState/update", payload: FormatStateEnum.Quotes });
}

const QuoteFormat = {
  onClick,
};

export default QuoteFormat;
