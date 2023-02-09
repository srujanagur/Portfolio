import React from "react";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";

import "./Home.css";

export default function Home() {
  return (
    <div className="allsections">
      <div className="mainpage">
        <div className="home"></div>
        <div className="home2">
          <p className="navButtons">
            Seeking a full stack developer position
            <br /> where I can use my technical skills,
            <br />
            learn new things while accomplishing <br />
            my organization goals.
            <br />
          </p>
        </div>
      </div>
      <div className="section">
        <Projects />
      </div>
      <div className="section">
        <Education />
      </div>
      <div className="section">
        <Contact />
      </div>
      <div className="section">
        <Footer />
      </div>
    </div>
  );
}
