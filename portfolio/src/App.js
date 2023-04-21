import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Home/NavBar";

import "./index.css";
import "./App.css";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Skills from "./components/Skills/Skills";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <DarkModeSwitch checked={isDarkMode} onChange={toggleMode} />
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills skills={skills} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
