import React from "react";

import "./Education.css";
export default function Education() {
  return (
    <div>
      <div className="education-header">
        <h1>Education & Skills</h1>
      </div>
      <div className="education-sections">
        <div className="each-section">
          <h5>
            MASTER’S IN <br />
            COMPUTER APPLICATIONS
          </h5>
          <p>Osmania University 2007-2011</p>
        </div>
        <div className="each-section">
          <h5>
            FULLSTACK DEVELOPER
            <br /> COURSE(BOOTCAMP)
          </h5>
          <p>Integrify 2022</p>
        </div>
        <div className="each-section">
          <h5>Skills</h5>
          <p>
            HTML, CSS, Bootstrap
            <br /> Material UI, Mantine UI
            <br /> JavaScript React, Redux, TypeScript,Angular.
            <br /> Node.js, Express, MongoDB
            <br /> GitHub Netlify, Heroku, Azure basics, AWS
          </p>
        </div>
      </div>
    </div>
  );
}
