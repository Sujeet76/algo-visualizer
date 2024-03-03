import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/theme-provider";
import { VisualizerProvider } from "./context/visualizer-provider";
import { SidebarProvider } from "./context/sidebar-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <ThemeProvider
    defaultTheme='dark'
    storageKey='theme'
  >
    <VisualizerProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </VisualizerProvider>
  </ThemeProvider>
  // {/* </React.StrictMode> */}
);
