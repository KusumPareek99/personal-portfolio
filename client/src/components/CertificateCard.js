import React from "react";
import { Col } from "react-bootstrap";

const CertificateCard = ({ logoUrl, certificateUrl, linkToCertificate }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href={linkToCertificate}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="card">
          <div className="card-container">
            <div className="card-face front-face">
              <img src={certificateUrl} alt="certificate" loading="lazy" />
            </div>
            <div className="card-face back-face">
              <div className="container-certificate">
                <img src={logoUrl} alt="org logo" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};

export default CertificateCard;
