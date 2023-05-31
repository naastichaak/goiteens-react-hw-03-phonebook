import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./components/App";

const root = document.querySelector("#root");

createRoot(root).render(<App />);
