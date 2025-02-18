import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaWindows, FaBlender } from "react-icons/fa"; // Windows and Blender icons
import { SiMicrosoft, SiVisualstudiocode, SiUnrealengine } from "react-icons/si"; // VS, VS Code, Unreal Engine
import { FaRobot } from "react-icons/fa"; // ChatGPT (Generic AI/Robot icon)

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Windows */}
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>

      {/* Visual Studio Code */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      {/* Visual Studio */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoft />
      </Col>

      {/* Blender */}
      <Col xs={4} md={2} className="tech-icons">
        <FaBlender />
      </Col>

      {/* Unreal Engine */}
      <Col xs={4} md={2} className="tech-icons">
        <SiUnrealengine />
      </Col>

      {/* ChatGPT */}
      <Col xs={4} md={2} className="tech-icons">
        <FaRobot />
      </Col>
    </Row>
  );
}

export default Toolstack;

