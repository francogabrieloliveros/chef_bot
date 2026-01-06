import { createRoot } from "react-dom/client";
import "/src/index.css";
import App from "/src/App.jsx";

const root = createRoot(document.getElementById("root"));

root.render(<App />);
