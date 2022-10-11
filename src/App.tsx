import React from "react";
import Home from "./Pages/Home";
import Next from "./Pages/Next";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Next" element={<Next />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
