import React from "react";

import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaWind,
  FaDiceD20,
  FaNodeJs,
  FaDatabase,
  FaMicrosoft,
  FaGit,
  FaDocker,
  FaAngular,
  FaServer,
} from "react-icons/fa";

import "./Skills.css";
import Skill from "./Skill";

export default function Skills() {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "TailwindCSS",
    "Redux",
    "Angular",
  ];
  const backendSkills = [
    "ExpressJs",
    "Nodejs",
    "MongoDB",
    "SQL",
    "Azure",
    "Git",
    "Docker",
  ];
  const frontendSkillIcons = {
    Angular: FaAngular,
    Redux: FaDiceD20,
    TailwindCSS: FaWind,
    Bootstrap: FaBootstrap,
    React: FaReact,
    JavaScript: FaJs,
    CSS: FaCss3Alt,
    HTML: FaHtml5,
  };
  const backendSkillIcons = {
    Docker: FaDocker,
    Git: FaGit,
    Azure: FaMicrosoft,
    SQL: FaDatabase,
    MongoDB: FaDatabase,
    Nodejs: FaNodeJs,
    ExpressJs: FaServer,
  };

  return (
    <div>
      <div className="skills">
        <h1>Skills</h1>
        <ul>
          <li className="list">
            {frontendSkills.map((skill, index) => (
              <Skill
                key={index}
                name={skill}
                icon={frontendSkillIcons[skill]}
              />
            ))}
          </li>
          <li className="list">
            {backendSkills.map((skill, index) => (
              <Skill key={index} name={skill} icon={backendSkillIcons[skill]} />
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}
