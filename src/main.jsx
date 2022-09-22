import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ToggleColorModeWrapper from "./common/utils/use-color-mode";
import { ModalProvider } from "./common/utils/use-modal";
import { ToastProvider } from "./common/utils/use-toast";
// import './assets/main.scss';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToggleColorModeWrapper>
      <ModalProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </ModalProvider>
    </ToggleColorModeWrapper>
  </React.StrictMode>
);
