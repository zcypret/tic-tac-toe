import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import DarkModeButton from './DarkModeButton';
import App from './App';

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <DarkModeButton />
    <App />
  </StrictMode>
);