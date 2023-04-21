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
} from "react-icons/fa";

import "./Skills.css";
import Skill from "./Skill";

export default function Skills() {
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
  const skillIcons = {
    Docker: FaDocker,
    Git: FaGit,
    Azure: FaMicrosoft,
    SQL: FaDatabase,
    MongoDB: FaDatabase,
    Nodejs: FaNodeJs,
    Redux: FaDiceD20,
    TailwindCSS: FaWind,
    Bootstrap: FaBootstrap,
    React: FaReact,
    JavaScript: FaJs,
    CSS: FaCss3Alt,
    HTML: FaHtml5,
  };

  return (
    <div>
      <div className="skills">
        <h1>Skills</h1>
        <ul>
          <li className="list">
            {skills.map((skill, index) => (
              <Skill key={index} name={skill} icon={skillIcons[skill]} />
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}
