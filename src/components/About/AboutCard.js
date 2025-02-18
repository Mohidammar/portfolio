import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohid Ammar </span>
            from <span className="purple"> Sargodha, Pakistan.</span>
            <br />
            I am currently pursuing my batchelors in AI from Bahria University.
            <br />
            I am the founder of KRIG AI, where I aim to revolutionize AI technologies and empower businesses and communities through innovative AI solutions.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing snooker
            </li>
            <li className="about-activity">
              <ImPointRight /> Community work
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Never forget the bigger pucture!"{" "}
          </p>
          <footer className="blockquote-footer">Mohid Ammar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
