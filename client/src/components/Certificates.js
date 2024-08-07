import React from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import CertificateCard from "./CertificateCard";
import hackerrankIcon from "../assets/img/HackerRank_Icon.png";
import sqlBasicCert from "../assets/img/sql-basic.png";
import cssBasicCert from "../assets/img/css-basic.png";
import fccLogo from "../assets/img/fcc-logo.webp";
import backendCert from "../assets/img/fcc-backend.png";
import responsiveCert from "../assets/img/fcc-responsive.png";
import frontendCert from "../assets/img/fcc-frontend.png";
import dsaCert from "../assets/img/fcc-dsa.png";

import googleLogo from "../assets/img/google-logo.jpeg";
import googleLlmCert from "../assets/img/GCllm.png";
import genAiCert from "../assets/img/GCGenAI.png";
import genAiFundCert from "../assets/img/GCGenAiFundamentals.png";
import responsibleAiCert from "../assets/img/GCResponsibleAi.png";

import courseraLogo from "../assets/img/coursera_logo.jpeg";
import osCert from "../assets/img/courseraOS.jpeg";
import pythonosCert from "../assets/img/courseraPythonOS.jpeg";
import pythonCert from "../assets/img/courseraPython.jpeg";
import gitCert from "../assets/img/courseraGit.jpeg";
import uxCert from "../assets/img/courseraUX.jpeg";

export const Certificates = () => {
  const certificates = [
    {
      logoUrl: hackerrankIcon,
      certificateUrl: sqlBasicCert,
      linkToCertificate: "https://www.hackerrank.com/certificates/bef45a343bfc",
    },
    {
      logoUrl: hackerrankIcon,
      certificateUrl: cssBasicCert,
      linkToCertificate: "https://www.hackerrank.com/certificates/fecdadacd8e1",
    },
    {
      logoUrl: fccLogo,
      certificateUrl: responsiveCert,
      linkToCertificate:
        "https://www.freecodecamp.org/certification/Kusum-Pareek/responsive-web-design",
    },
    {
      logoUrl: fccLogo,
      certificateUrl: dsaCert,
      linkToCertificate:
        "https://www.freecodecamp.org/certification/Kusum-Pareek/javascript-algorithms-and-data-structures",
    },
    {
      logoUrl: fccLogo,
      certificateUrl: frontendCert,
      linkToCertificate:
        "https://www.freecodecamp.org/certification/Kusum-Pareek/front-end-development-libraries",
    },
    {
      logoUrl: fccLogo,
      certificateUrl: backendCert,
      linkToCertificate:
        "https://www.freecodecamp.org/certification/Kusum-Pareek/back-end-development-and-apis",
    },

    {
      logoUrl: courseraLogo,
      certificateUrl: pythonCert,
      linkToCertificate:
        "https://coursera.org/share/6937b5571b980e1c1865f459f062e0da",
    },
    {
      logoUrl: courseraLogo,
      certificateUrl: pythonosCert,
      linkToCertificate:
        "https://coursera.org/share/dd3d2ac4324a6c935d7f46eb9a6fe5a7",
    },
    {
      logoUrl: courseraLogo,
      certificateUrl: osCert,
      linkToCertificate:
        "https://coursera.org/share/e1961282c50070811800678cd50fd26f",
    },
    {
      logoUrl: courseraLogo,
      certificateUrl: gitCert,
      linkToCertificate:
        "https://coursera.org/share/d2dd389a0e64aa0dd6ed0218f0fcdd5b",
    },
    {
      logoUrl: courseraLogo,
      certificateUrl: uxCert,
      linkToCertificate:
        "https://coursera.org/share/cd403cb3dfdd728df604e6d73ff5cd10",
    },
    {
      logoUrl: googleLogo,
      certificateUrl: genAiFundCert,
      linkToCertificate:
        "https://www.cloudskillsboost.google/public_profiles/66e4999b-a22c-414f-8172-af8bba664f0e/badges/5012204",
    },
    {
      logoUrl: googleLogo,
      certificateUrl: responsibleAiCert,
      linkToCertificate:
        "https://www.cloudskillsboost.google/public_profiles/66e4999b-a22c-414f-8172-af8bba664f0e/badges/5011798",
    },
    {
      logoUrl: googleLogo,
      certificateUrl: googleLlmCert,
      linkToCertificate:
        "https://www.cloudskillsboost.google/public_profiles/66e4999b-a22c-414f-8172-af8bba664f0e/badges/5011798",
    },
    {
      logoUrl: googleLogo,
      certificateUrl: genAiCert,
      linkToCertificate:
        "https://www.cloudskillsboost.google/public_profiles/66e4999b-a22c-414f-8172-af8bba664f0e/badges/4485518",
    },
  ];

  return (
    <section className="certificate" id="certificates">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Certificates & Achievements</h2>
                  <p>
                    Discover my certifications and achievements, showcasing my
                    dedication to continuous learning, professional growth, and
                    excellence in various tech domains.
                  </p>
                  <Container id="projects-tabs">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Col>
                        <Row>
                          {certificates.map((certificate, index) => {
                            return (
                              <CertificateCard key={index} {...certificate} />
                            );
                          })}
                        </Row>
                      </Col>
                    </Tab.Content>
                  </Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} loading="lazy" />
    </section>
  );
};
