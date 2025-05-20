// Entry point for the React application
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.tsx";
import "./index.css";

// Get the root DOM element for React mounting
const rootElement = document.getElementById("root");

// Initialize React application with StrictMode for development safety
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <StrictMode>
            <App />
        </StrictMode>,
    );
}
