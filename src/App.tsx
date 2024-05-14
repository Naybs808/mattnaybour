import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Publications from "./pages/Publications/Publications.tsx";
import About from "./pages/About/About.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/publications" element={<Publications />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
