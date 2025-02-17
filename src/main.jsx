import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Details from "./components/Details";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router basename="/exo-api">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/post/:id" element={<Details />} />
    </Routes>
  </Router>
);
