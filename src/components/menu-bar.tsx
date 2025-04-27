import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { FormatStateEnum } from "../enum/format-state";
import BoldFormat from "../format/bold";
import BoldIcon from "../icons/bold-icon";
import { JSX } from "react";
import ItalicIcon from "../icons/italic-icon";
import UnderlineIcon from "../icons/underline-icon";
import UnorderedListIcon from "../icons/unordered-list-icon";
import QuoteIcon from "../icons/quote-icon";
import NormalTextIcon from "../icons/normal-icon";
import OrderedListIcon from "../icons/ordered-list-icon";
import ItalicFormat from "../format/italic";
import UnderlineFormat from "../format/underline";
import UnorderedListFormat from "../format/unorderd-list";
import OrderedListFormat from "../format/ordered-list";
import QuoteFormat from "../format/quote";

export function MenuBar() {
  const formatState = useSelector((state: RootState) => state.formatState);
  const selection = useSelector((state: RootState) => state.selection);
  const dispatch = useDispatch();
  console.log(formatState);
  console.log(selection);

  type ItemsType = {
    element: () => JSX.Element;
    state: FormatStateEnum;
    onclick: (dispatch: AppDispatch, range: Range) => void;
  };

  const items: ItemsType[] = [
    {
      element: NormalTextIcon,
      state: FormatStateEnum.Normal,
      onclick: BoldFormat.onClick,
    },
    {
      element: BoldIcon,
      state: FormatStateEnum.Bold,
      onclick: BoldFormat.onClick,
    },
    {
      element: ItalicIcon,
      state: FormatStateEnum.Italic,
      onclick: ItalicFormat.onClick,
    },
    {
      element: UnderlineIcon,
      state: FormatStateEnum.Underline,
      onclick: UnderlineFormat.onClick,
    },
    {
      element: UnorderedListIcon,
      state: FormatStateEnum.UnorderedList,
      onclick: UnorderedListFormat.onClick,
    },
    {
      element: OrderedListIcon,
      state: FormatStateEnum.OrderedList,
      onclick: OrderedListFormat.onClick,
    },
    {
      element: QuoteIcon,
      state: FormatStateEnum.Quotes,
      onclick: QuoteFormat.onClick,
    },
  ];

  // const update_function = () => {
  //   const selecti = document.getSelection();
  //   dispatch({ type: "selection/update", payload: selecti });
  // };

  const item_html = (item: ItemsType) => (
    <div
      className={
        "w-12 h-12 flex items-center justify-center rounded-sm " +
        (formatState.includes(item.state) ? "bg-blue-200" : "bg-gray-200")
      }
      onClick={() => {
        item.onclick(dispatch, selection.range);
      }}
    >
      {item.element()}
    </div>
  );
  return (
    <div
      className="h-16
      w-full
      mt-2
      flex gap-x-4 justify-center items-center text-lg font-medium"
    >
      {items.map(item_html)}
    </div>
  );
}
