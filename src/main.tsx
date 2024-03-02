import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/theme-provider";
import { VisualizerProvider } from "./context/visualizer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <ThemeProvider
    defaultTheme='dark'
    storageKey='theme'
  >
    <VisualizerProvider>
      <App />
    </VisualizerProvider>
  </ThemeProvider>
  // {/* </React.StrictMode> */}
);
