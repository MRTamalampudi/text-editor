import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { MantineProvider } from "@mantine/core";
import theme from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MantineProvider>,
);
