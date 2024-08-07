import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="proj-imgbx">
          <img alt="projectimage" src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
