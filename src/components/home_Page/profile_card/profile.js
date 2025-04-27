import "./profile.css";
import TypingEffect from "../typing Effect/typing";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

function Profile({style}) {
  return (
    <div className="profileCard" style={style}>
      <img src="/1735027231629.JPG" alt="profile_img" />
      <ul>
        <li>
          {" "}
          <span className="h3 text-center" style={{ fontFamily: "monospace" }}>
            {" "}
            Venkata Kiran Adapa
          </span>
        </li>
        <li>
          <TypingEffect
            text="H i! 👋🏻 I’m a developer skilled in Java, Python, JavaScript, TypeScript, and SQL, with a focus on backend development using Node.js, Express.js, and MySQL ⚙️. I enjoy solving problems, learning new tech 💡, and collaborating on impactful projects 🤝."
            speed={50}
            className="fw-light "
            style={{ fontFamily: "monospace" }}
          />
        </li>
        <li>
          <Links />
        </li>
      </ul>
    </div>
  );
}

function Links() {
  return (
    <>
      <p className="text-center">Social Media Links</p>

      <div className="d-flex justify-content-center flex-wrap gap-4 mt-3 links">
        <a
          href="mailto:venkatakiranadapa@gmail.com"
          className="text-danger fs-4"
          style={{ textDecoration: "none" }}
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Venkata-Kiran-Adapa"
          target="_blank"
          rel="noopener noreferrer"
          className="dark-github-icon fs-4"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/venkata-kiran-adapa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary fs-4"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://leetcode.com/u/ADAPA_VENKATA_KIRAN/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-warning fs-4"
        >
          <FaCode />
        </a>
        <a
          href="/VENKATA_KIRAN_ADAPA_Resume.pdf"
          download
          className="text-success fs-4"
          style={{ textDecoration: "none" }}
        >
          <FaDownload />
        </a>
      </div>
    </>
  );
}

export default Profile;
