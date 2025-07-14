import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { registerSW } from "virtual:pwa-register";

import "./index.css";
import App from "./App.jsx";
import sotre from "./store.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={sotre}>
      <App />
    </Provider>
  </StrictMode>,
);

registerSW({
  onNeedRefresh() {},
});
