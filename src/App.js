import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./container/Home/Home";
import About from "./container/About/About";
import Services from "./container/Services/Services";
import Contact from "./container/Contact/Contact";
import NotFound from "./components/Notfound";
import Navbar from "./container/Navbar/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
