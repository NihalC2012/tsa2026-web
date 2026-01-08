import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Timeline from "./Timeline";
import Maps from "./Maps";
import People from "./People";
import Search from "./Search";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Timeline />} />
      <Route path="/neighborhoods" element={<Maps />} />
      <Route path="/people" element={<People />} />
      <Route path="/search" element={<Search />} />
      {/* fallback */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
