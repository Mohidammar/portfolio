import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import meta from "../../Assets/Projects/3d.jpg";
import vton from "../../Assets/Projects/vton.jpg";
import krigai from "../../Assets/Projects/new2.png";
import lega from "../../Assets/Projects/legacy.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meta}
              isBlog={false}
              title="Personal Metahuman"
              description="The goal of the project is to provide everyone with a digital presence. Imagine having your own 3D metahuman, which could eventually be used in 3D games, creating a more immersive experience. Instead of seeing an avatar, you'd see yourself, significantly enhancing the user experience. While this technology is possible today, the process is time-consuming. The aim is to automate it, so all you need to do is upload your images, and the output will be your personalized metahuman"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vton}
              isBlog={false}
              title="Virtual Try on"
              description="Virtual try-on for clothing allows users to see how garments will look on them without physically trying them on. It uses augmented reality (AR) or 3D modeling to superimpose the clothing item onto a user’s virtual avatar or live video feed. This technology helps users visualize fit, style, and appearance in real time. It enhances online shopping by providing a more interactive and accurate way to try clothes virtually."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lega}
              isBlog={false}
              title="Legacy.ai"
              description="Have you ever been curious about your ancestors? This app introduces a groundbreaking idea by storing ancestral information and passing it down to future generations. It features a chatbot for sharing and retrieving details, a daily diary to capture your memories, and a family tree to map out relationships. It’s a modern way to preserve your legacy and stay connected to your roots!  "             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krigai}
              isBlog={false}
              title="KRIG AI"
              description=" A company where I dream and work relentlessly to bring innovation and solve problems, particularly in the field of artificial intelligence. The mission is to unite individuals with diverse mindsets but shared goals under one roof, to create lasting and impactful change "
              />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
