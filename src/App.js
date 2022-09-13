import React from "react";
import { Main } from "./components/main";
import { BrowserRouter as Router } from "react-router-dom";

export function App() {
  return (
    <div className="App">
      
      <Router>
        <Main />
      </Router>
    </div>
  );
}
