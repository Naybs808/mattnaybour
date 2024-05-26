import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Publications from "./pages/Publications/Publications.tsx";
import About from "./pages/Gallery/Gallery.tsx";
import Gallery from "./pages/Gallery/Gallery.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/publications" element={<Publications />} />
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Essays" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
