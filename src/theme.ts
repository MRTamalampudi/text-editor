import {
  Button,
  Select,
  TextInput,
  Pill,
  Checkbox,
  Tooltip,
  createTheme,
} from "@mantine/core";

const theme = createTheme({
  primaryColor: "teal",
  focusRing: "never",
  components: {
    Button: Button.extend({
      defaultProps: {
        size: "sm",
      },
    }),
    Select: Select.extend({
      defaultProps: {
        size: "md",
      },
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        size: "sm",
      },
    }),
    Pill: Pill.extend({
      defaultProps: {
        size: "sm",
        radius: "sm",
      },
    }),
    Checkbox: Checkbox.extend({
      defaultProps: {
        size: "sm",
      },
    }),
    Tooltip: Tooltip.extend({
      defaultProps: {
        position: "bottom",
      },
    }),
  },
});

export default theme;
