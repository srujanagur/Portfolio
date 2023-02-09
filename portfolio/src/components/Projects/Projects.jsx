import React from "react";

import "./Projects.css";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="projects">
        <div className="eachProject">
          <div className="project-image">
            <h5>Recipe App</h5>
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
                project link
              </a>
            </button>
          </div>
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
