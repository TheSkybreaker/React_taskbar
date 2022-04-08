import { Link } from "react-router-dom";

const About = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h4>Version 1.0.0</h4>
      <p>
        <a href="https://github.com/TheSkybreaker" target="_blank">
          My github
        </a>
      </p>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
}

export default About