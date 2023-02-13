import React from "react";
import Footer from "../Footer/Footer";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Contact.css";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <h1>Contact</h1>
      <Container>
        <Row>
          <Col className="section1">
            <iframe
              width="100%"
              height="100%"
              title="map"
              src="https://www.google.com/maps/embed/v1/place?q=Flemingsberg,+Huddinge,+Sweden&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
          </Col>
          <Col className="section2">
            <div>
              <h2>Address</h2>
              <p className="mt-1">stockholm , Sweden</p>
            </div>
            <div>
              <h2>Email</h2>
              <a href>srujana.muskula@gmail.com</a>
            </div>

            <form
              netlify
              name="contact"
              onSubmit={handleSubmit}
              className="form-section"
            >
              <h2>Hire Me</h2>

              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  size="30"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  size="30"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  size="20"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </Col>
        </Row>
      </Container>
      <div className="footer-section">
        <Footer />
      </div>
    </section>
  );
}
