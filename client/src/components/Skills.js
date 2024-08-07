import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/color-sharp.png";
import htmlIcon from "../assets/img/html-icon.svg";
import bootstrapIcon from "../assets/img/bootstrap-5-logo-icon.svg";
import tailwindIcon from "../assets/img/tailwind-css-icon.svg";
import javascriptIcon from "../assets/img/javascript-programming-language-icon.svg";
import nodeJsIcon from "../assets/img/node-js-icon.svg";
import expressJsIcon from "../assets/img/express-js-icon.svg";
import reactJsIcon from "../assets/img/react-js-icon.svg";
import pythonIcon from "../assets/img/python-programming-language-icon.svg";
import javaIcon from "../assets/img/java-programming-language-icon.svg";
import mongoIcon from "../assets/img/mongodb-icon.svg";
import mysqlIcon from "../assets/img/mysql-icon.svg";
import firebaseIcon from "../assets/img/google-firebase-icon.svg";
import flaskIcon from "../assets/img/flask-logo-icon.svg";
import vsCodeIcon from "../assets/img/visual-studio-code-icon.svg";
import gitIcon from "../assets/img/git-icon.svg";
import gitHubIcon from "../assets/img/github-icon-skills.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = {
    html: [htmlIcon, "HTML"],
    bootstrap: [bootstrapIcon, "Bootstrap"],
    tailwind: [tailwindIcon, "Tailwind CSS"],
    javascript: [javascriptIcon, "JavaScript"],
    nodejs: [nodeJsIcon, "Node.js"],
    expressjs: [expressJsIcon, "Express.js"],
    react: [reactJsIcon, "React.js"],
    python: [pythonIcon, "Python"],
    java: [javaIcon, "Java"],
    mongodb: [mongoIcon, "MongoDB"],
    mysql: [mysqlIcon, "MySQL"],
    firebase: [firebaseIcon, "Firebase"],
    flask: [flaskIcon, "Flask"],
    vscode: [vsCodeIcon, "Visual Studio Code"],
    git: [gitIcon, "Git"],
    github: [gitHubIcon, "GitHub"],
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Passionate developer skilled in front-end and back-end
                technologies, continuously learning and creating innovative,
                responsive web applications.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {Object.entries(skills).map(([key, [icon, label]]) => (
                  <div className="item" key={key}>
                    <img src={icon} alt={label} width={100} height={100} />
                    <h5>{label}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="bgimg"
        loading="lazy"
      />
    </section>
  );
};
