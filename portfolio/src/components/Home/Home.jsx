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
            jsdhbgghfuyrhghrhuirh
            <br /> dfhbguygruygruyrhuyhu
            <br /> djfhguygruyhrgukhgkur
            <br /> djfbhjudhgurgheruighiuergh
            <br />
          </p>
        </div>
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Education />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
