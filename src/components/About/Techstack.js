import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiPython } from "react-icons/di";
import { FaTasks } from "react-icons/fa"; // Problem-solving icon
import { GiArtificialIntelligence } from "react-icons/gi"; // AI-related icon
import { MdStorage } from "react-icons/md"; // Data Structures (Generic storage icon)
import { GiBrain } from "react-icons/gi"; // Algorithms placeholder icon
import { GiPhotoCamera } from "react-icons/gi";
 // Image processing placeholder icon

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* C++ */}
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>

      {/* Python */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

      {/* Data Structures */}
      <Col xs={4} md={2} className="tech-icons">
        <MdStorage />
      </Col>

      {/* Algorithms */}
      <Col xs={4} md={2} className="tech-icons">
        <GiBrain />
      </Col>

      {/* Problem Solving */}
      <Col xs={4} md={2} className="tech-icons">
        <FaTasks />
      </Col>

      {/* Image Processing */}
      <Col xs={4} md={2} className="tech-icons">
        <GiPhotoCamera />
      </Col>

      {/* Artificial Intelligence */}
      <Col xs={4} md={2} className="tech-icons">
        <GiArtificialIntelligence />
      </Col>
    </Row>
  );
}

export default Techstack;