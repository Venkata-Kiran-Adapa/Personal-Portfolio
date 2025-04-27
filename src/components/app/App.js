import "./App.css";
import Header from "../home_Page/header/Header.js";
import Profile from "../home_Page/profile_card/profile.js";
import Education from "../home_Page/Education/education.js";
import Project from "../home_Page/Projects/project.js";
import Certifications from "../home_Page/Certifications/certified.js";
import ExpertArea from "../home_Page/expertArea/expertArea.js";
import ProjectInfo from "../Projects Page/projectsInfo.js";
import About from "../About Page/about.js";
import Skills from "../Skills Page/skills.js";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="app">
      <Header setCurrentPage={setCurrentPage} />

      {currentPage === "home" && (
        <div className="appbody" >
          <>
            <div className="education-skills">
              <Education />
              <ExpertArea />
            </div>
            <div className="certification-profile">
              <Profile />
              <Certifications />
            </div>
            <Project />
          </>
        </div>
      )}

      {currentPage === "projects" && (
        <div className="appbody " style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div className="stickyeffect">
            <Profile style={{ overflowY: "hidden"}}/>
          </div>
          <ProjectInfo />
        </div>
      )}

      {currentPage === "about" && (
        <>
          <div className="appbody" style={{ gridTemplateColumns: "1fr 2fr",width: "100%" }}>
          <div className="stickyeffect">
              <Profile />
            </div>
            <About />
          </div>
        </>
      )}

      {currentPage === "skills" && (
        <>
          <div className="appbody" style={{ gridTemplateColumns: "1fr 2fr" }}>
            <div className="stickyeffect">
              <Profile />
            </div>
            <Skills />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
