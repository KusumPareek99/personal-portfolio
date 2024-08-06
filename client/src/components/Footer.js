import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import linkedinIcon from "../assets/img/nav-icon1.svg";
import githubIcon from "../assets/img/github-icon.svg";
import emailIcon from "../assets/img/envelope-icon.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Row style={{ justifyContent: "center" }}>
        <Col
          size={12}
          sm={6}
          className="text-center text-sm-end"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/kusum-p-a54759191/"
              target="_blank"
            >
              <img src={linkedinIcon} alt="Icon" />
            </a>
            <a href="https://github.com/KusumPareek99" target="_blank">
              <img src={githubIcon} alt="Icon" />
            </a>
            <a
              href="mailto:kusumpareek7620@gmail.com?subject=Portfolio Website"
              target="_blank"
            >
              <img src={emailIcon} alt="Icon" />
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <p>&copy; Copyright Kusum Pareek.</p>
            <p>All Rights Reserved.</p>
          </div>
        </Col>
      </Row>
    </footer>
  );
};
