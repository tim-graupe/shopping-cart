import React from "react";
import { Main } from "./components/main";
import { App } from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/App" element={<App />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
