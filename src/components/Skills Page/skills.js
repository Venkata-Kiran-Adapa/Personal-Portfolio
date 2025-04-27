  import { FaJava, FaPython, FaReact, FaJs, FaNodeJs, FaDatabase,
    FaHtml5, FaCss3Alt, FaBootstrap, FaAws, FaGitAlt, FaCode, 
    FaServer, FaKey, FaRobot, FaProjectDiagram
  } from "react-icons/fa";
  import { 
    SiTypescript, SiExpress, SiMongodb, SiMysql, SiIntellijidea, 
    SiPostman,  SiC, SiTensorflow 
  } from "react-icons/si";
  import { DiGoogleAnalytics } from "react-icons/di";
  

 
  

  const programmingLanguages = [
    { name: "Java", icon: <FaJava className="icon java" /> },
    { name: "Python", icon: <FaPython className="icon python" /> },
    { name: "C Language", icon: <SiC className="icon c" /> }
  ];

  const frontendSkills = [
    { name: "HTML", icon: <FaHtml5 className="icon html" /> },
    { name: "CSS", icon: <FaCss3Alt className="icon css" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="icon bootstrap" /> },
    { name: "JavaScript", icon: <FaJs className="icon javascript" /> },
    { name: "TypeScript", icon: <SiTypescript className="icon typescript" /> },
    { name: "React", icon: <FaReact className="icon react" /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs className="icon node" /> },
    { name: "Express.js", icon: <SiExpress className="icon express" /> },
    { name: "RESTful API Development", icon: <FaServer className="icon api" /> },
    { name: "JWT Authentication", icon: <FaKey className="icon jwt" /> }
  ];

  const databaseSkills = [
    { name: "MySQL", icon: <SiMysql className="icon mysql" /> },
    { name: "MongoDB", icon: <SiMongodb className="icon mongodb" /> }
  ];

  const developerTools = [
    { name: "IntelliJ IDEA", icon: <SiIntellijidea className="icon intellij" /> },
    { name: "VS Code", icon: <FaCode className="icon vscode" /> },
    { name: "GitHub", icon: <FaGitAlt className="icon github" /> },
    { name: "Postman", icon: <SiPostman className="icon postman" /> },
    { name: "MongoDB Compass", icon: <SiMongodb className="icon mongodb" /> }
  ];

  const otherSkills = [
    { name: "Data Structures & Algorithms", icon: <DiGoogleAnalytics className="icon dsa" /> },
    { name: "Machine Learning", icon: <SiTensorflow className="icon ml" /> }, 
    { name: "AWS", icon: <FaAws className="icon aws" /> },
    { name: "SDLC", icon: <FaProjectDiagram className="icon sdlc" /> },
    { name: "Version Control (Git)", icon: <FaGitAlt className="icon git" /> }
  ];
  
  
  function Skills() {
    return (
      <div className="skills-page">
       <DisplaySkills skills={programmingLanguages}>Programming Languages</DisplaySkills>,
       <DisplaySkills skills={frontendSkills}>Frontend Skills</DisplaySkills>,
       <DisplaySkills skills={backendSkills}>Backend Skills</DisplaySkills>,
       <DisplaySkills skills={databaseSkills}>Database Skills</DisplaySkills>,
       <DisplaySkills skills={developerTools}>Developer Tools</DisplaySkills>,
       <DisplaySkills skills={otherSkills}>Other Skills</DisplaySkills>
      </div>
  );
};

function DisplaySkills({skills,children}){
  return (
    <div className="skills-container" style={{ margin: "10px"  ,boxShadow:' 0 4px 18px goldenrod'}}>
    <h2 className="title">{children}</h2>
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
}
export default Skills;