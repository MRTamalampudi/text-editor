import "./App.css";
import { MenuBar } from "./components/menu-bar";
import { Canvas } from "./components/canvas";
import "@mantine/core/styles.css";

function App() {
  return (
    <div className="bg-gray-50 w-full items-center flex flex-col h-dvh">
      <MenuBar />
      <Canvas />
    </div>
  );
}

export default App;
