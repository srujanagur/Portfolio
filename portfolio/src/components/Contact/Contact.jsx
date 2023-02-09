import React from "react";

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
      <Container>
        <Row>
          <Col className="section1">
            <iframe
              width="100%"
              height="100%"
              title="map"
              src="https://www.google.se/maps/place/Flemingsberg,+Huddinge/@59.2076885,17.8389365,11z/data=!3m1!4b1!4m5!3m4!1s0x465f708e096843e7:0xc5263a5317d60047!8m2!3d59.2198142!4d17.9466915"
            />
          </Col>
          <Col className="section2">
            <div>
              <h2>Address</h2>
              <p className="mt-1">
                stockholm <br />
                Sweden
              </p>
            </div>
            <div>
              <h2>Email</h2>
              <a href>srujana.muskula@gmail.com</a>
            </div>

            <form netlify name="contact" onSubmit={handleSubmit}>
              <h2>Hire Me</h2>

              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  size="50"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  size="50"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  size="50"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
