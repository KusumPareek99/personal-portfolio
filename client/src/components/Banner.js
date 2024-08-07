import { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import headerImg from "../assets/img/profile-image.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Software Engineer",
    "MERN Developer",
    "Web App Developer",
    "Coder",
    "Programmer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <Image
                    src={headerImg}
                    alt="Header Img"
                    roundedCircle
                    style={{ boxShadow: "0 0 100px #191970" }}
                    loading="lazy"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h1>
                    {`Hi! I'm Kusum Pareek!`}{" "}
                    <span
                      className="txt-rotate"
                      data-period="1000"
                      data-rotate='[ "Software Engineer" , "MERN Developer", "Web App Developer", "Coder", "Programmer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I am a self-motivated and proficient Developer with a
                    Master's degree in Computer Applications. My education has
                    provided me with a robust foundation in both front-end and
                    back-end technologies, including HTML, CSS, JavaScript, and
                    Python. I have practical experience with various back-end
                    technologies such as Node.js, Express.js, Python, Java, and
                    PHP.
                  </p>
                  <p>
                    As a recent postgraduate, I possess a solid grounding in
                    MERN stack development and am enthusiastic about creating
                    dynamic and responsive web applications. I am constantly
                    exploring new technologies and actively seeking
                    opportunities to learn and grow.
                  </p>
                  <a
                    href="/Kusum-Pareek-Web.pdf"
                    download={"Kusum_Pareek_CV.pdf"}
                    style={{ textDecoration: "none" }}
                  >
                    <button>
                      Download CV <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
