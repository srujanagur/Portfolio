import React from "react";
import { BsGithub, BsLinkedin, BsMailbox } from "react-icons/bs";

import "./Footer.css";

export default function Footer() {
  const email = "gurrala.srujana@outlook.com";
  return (
    <div className="footermain">
      <div className="footerSection">
        <div className="footerMail">
          <h2>Contact Me</h2>
          <p>Send me an email at:</p>
          <a href={`mailto:${email}`}>{email}</a>
        </div>

        <ul className="footerUl">
          <li>
            <a href="https://github.com/srujanagur">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/srujana-g-5559371a1/">
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href="mailto:gurrala.srujana@outlook.com">
              <BsMailbox />
            </a>
          </li>
          <li>Copyrights@2021</li>
        </ul>
      </div>
    </div>
  );
}
