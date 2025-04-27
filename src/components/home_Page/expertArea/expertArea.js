import React from "react";
import { FaJava, FaPython, FaReact, FaJs, FaNodeJs, FaTypo3, FaDatabase } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { DiGoogleAnalytics } from "react-icons/di"; 
import "./expertArea.css";

const skills = [
  { name: "Java", icon: <FaJava className="icon java" /> },
  { name: "DSA", icon: <DiGoogleAnalytics className="icon dsa" /> },
  { name: "React", icon: <FaReact className="icon react" /> },
  { name: "JavaScript", icon: <FaJs className="icon javascript" /> },
  { name: "TypeScript", icon: <FaTypo3 className="icon typescript" /> },
  { name: "Node.js", icon: <FaNodeJs className="icon node" /> },
  { name: "Express.js", icon: <SiExpress className="icon express" /> },
  { name: "SQL", icon: <FaDatabase className="icon sql" /> },
  { name: "MongoDB", icon: <SiMongodb className="icon mongodb" /> },
  { name: "Python", icon: <FaPython className="icon python" /> },
];

const ExpertArea = () => {
  return (
    <div className="skills-container">
      <h2 className="title">My Top Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            {skill.icon}<br></br>
            <span className="skill-name text-white">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertArea;
