import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import shopBazaarApp from "../assets/img/project-assets/shopBazaar.png";
import basketBoostApp from "../assets/img/project-assets/basketBoost.png";
import weatherApp from "../assets/img/project-assets/weatherApp.png";
import qrCodeDesign from "../assets/img/project-assets/qrCodeComponent.png";
import beFitApp from "../assets/img/project-assets/beFit.png";
import recipePageDesign from "../assets/img/project-assets/recipePage.png";
import traplacaApp from "../assets/img/project-assets/traplaca.png";
import gpt3App from "../assets/img/project-assets/gpt3clone.png";
import stackOVerflowApp from "../assets/img/project-assets/stackOVerflow.png";

export const Projects = () => {
  const webProjects = [
    {
      title: "ShopBazaar",
      description: "Ecommerce Website",
      imgUrl: shopBazaarApp,
      projectUrl: "https://shopbazaar-app.onrender.com/",
    },
    {
      title: "Basket Boost",
      description: "Market Basket Analysis",
      imgUrl: basketBoostApp,
      projectUrl: "https://github.com/KusumPareek99/basket-boost-website",
    },
    {
      title: "Forecast Pro",
      description: "Weather Application",
      imgUrl: weatherApp,
      projectUrl: weatherApp,
    },
    {
      title: "IntelliCraft",
      description: "GPT-3 powered app",
      imgUrl: gpt3App,
      projectUrl:
        "https://drive.google.com/file/d/1YqHUQJnkrg5W95RhZaGLOjTfw2Y09qMd/view?usp=drive_link",
    },
    {
      title: "TraPlaCa",
      description: "A guide to Training, Placement & Career",
      imgUrl: traplacaApp,
      projectUrl: "https://github.com/KusumPareek99/trapalaca-final",
    },
    {
      title: "StackOverflow Clone",
      description: "Clone App with a innovative touch",
      imgUrl: stackOVerflowApp,
      projectUrl: "https://github.com/KusumPareek99/StackOverflow-Clone",
    },
  ];

  const androidApps = [
    {
      title: "BeFit",
      description: "Fitness App",
      imgUrl: beFitApp,
      projectUrl: "https://github.com/KusumPareek99/be-fit-app",
    },
  ];

  const frontendProjects = [
    {
      title: "QR Component",
      imgUrl: qrCodeDesign,
      projectUrl:
        "https://github.com/KusumPareek99/qr-code-component/tree/master",
    },
    {
      title: "Recipe Page",
      imgUrl: recipePageDesign,
    },
  ];

  return (
    <section className="project" id="projects">
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
                  <h2>Projects</h2>
                  <p>
                    Explore my diverse projects showcasing expertise in web
                    development, innovative solutions, and practical
                    applications of modern technologies and frameworks.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Android Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Frontend Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {webProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {androidApps.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {frontendProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        alt="bgimage"
        src={colorSharp2}
        loading="lazy"
      ></img>
    </section>
  );
};
