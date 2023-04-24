import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useState } from "react";

import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";

import Footer from "./components/Footer/Footer";
import NavBar from "./components/Home/NavBar";

import "./index.css";
import "./App.css";

import Skills from "./components/Skills/Skills";

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "TailwindCSS",
    "Redux",
    "Nodejs",
    "MongoDB",
    "SQL",
    "Azure",
    "Git",
    "Docker",
  ];
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  function toggleDarkMode() {
    setIsDarkModeOn(!isDarkModeOn);
  }

  return (
    <div className={isDarkModeOn ? "dark-mode" : "light-mode"}>
      <BrowserRouter>
        <NavBar isDarkModeOn={isDarkModeOn} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills skills={skills} />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
