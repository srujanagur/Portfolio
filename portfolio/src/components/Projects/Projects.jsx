import React from "react";

import "./Projects.css";

export default function Projects() {
  return (
    <div className="projectmain">
      <h1>Projects</h1>
      <div className="projects">
        <div className="eachProject">
          <div className="project-image">
            <h5>Recipe App</h5>
            <img
              src="./assets/recipe-app-image.png"
              height={150}
              width={275}
              alt=""
            ></img>
            <p>
              This application provides an attractive user interface to bring
              recipes from multiple recipe provider helps to collect feedbacks
              and improvement options.
            </p>
            <button className="projectButton">
              <a href="https://sru-food-app.netlify.app">live demo</a>
            </button>
            <button className="projectButton">
              <a href="https://github.com/srujanagur/recipe_app">
                Project link
              </a>
            </button>
          </div>
        </div>
        <div className="eachProject">
          <h5>Expense tracker</h5>
          <p>
            Developed an expense tracker application using HTML, CSS, React RTK
            Query to track personal or business expenses. This application
            features include Record and categorize expenses and generate reports
            for analysis. During this project I have learned new technologies,
            some Redux Toolkit and Tailwind CSS.
          </p>
          <button className="projectButton">
            <a href="https://github.com/srujanagur/expense-tracker">
              Project link
            </a>
          </button>
        </div>
        <div className="eachProject">
          <h5>SEP(FULLSTACK-PROJECT)</h5>
          <p>
            SEP (Swedish Events Planners SEP)organizes business events such as
            workshops, conferences, summer schools … etc.
          </p>
          <button className="projectButton">
            <a href="https://github.com/srujanagur/sep-backend">
              backend-Project link
            </a>
          </button>

          <button className="projectButton">
            <a href="https://github.com/srujanagur/sep-frontend">
              frontend-Project link
            </a>
          </button>
        </div>
        <div className="eachProject">
          <h5>Music App</h5>
          <p>
            This application is to display songs and can enjoy the music. I have
            done with backend and frontend.
          </p>
          <button className="projectButton">
            <a href="https://github.com/srujanagur/react_music_app">
              Project link
            </a>
          </button>
          <button className="projectButton">
            <a href="https://github.com/srujanagur/angular_music_app">
              Project link angular
            </a>
          </button>
        </div>
        <div className="eachProject">
          <h5>Sample youtube App</h5>
          <img
            src="./assets/youtube-app-image.png"
            height={150}
            width={275}
            alt=""
          ></img>
          <p>
            This application provides a glince of youtube from json file. In
            this Application I have used Sample Api, Bootstrap UI, React/Redux
          </p>
          <button className="projectButton">
            <a href="https://sample-youtube-app.netlify.app/">live demo</a>
          </button>
          <button className="projectButton">
            <a href="https://github.com/srujanagur/sample_youtube_app">
              Project link
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
