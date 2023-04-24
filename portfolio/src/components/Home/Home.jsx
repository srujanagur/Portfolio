import React from "react";

import Education from "../Education/Education";

import Projects from "../Projects/Projects";

import "./Home.css";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div className="allsections">
      <div className="mainpage">
        <div className="home">
          <img src="./assets/portfolio-background.png" alt=""></img>
        </div>
        <div className="home2">
          <p className="navButtons">
            Driven and motivated junior fullstack <br />
            and frontend developer seeking to <br />
            leverage my skills and knowledge <br />
            to contribute to a dynamic team in <br />a challenging and rewarding
            work environment.
            <br />
          </p>
        </div>
      </div>
      <div className="project-section">
        <Projects />
      </div>
      <div className="education-section">
        <Education />
      </div>
      <div className="skills-section">
        <Skills />
      </div>
      <div className="contact-section">
        <Footer />
      </div>
    </div>
  );
}
