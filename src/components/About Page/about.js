import './about.css'
import TypingEffect from '../home_Page/typing Effect/typing';
import { FaDownload } from "react-icons/fa";   

function AboutMe(){
  return(
    <div className="about-me fw-light">
        <h2 className='fw-bolder '><TypingEffect text={"H i👋🏻, I am Venkata Kiran Adapa"}/></h2>
    
      <p className="text-gray-700 leading-7 mb-6">
        👋 I'm a curious and driven software developer passionate about building impactful applications. I enjoy turning ideas into real, working products and continuously growing my skills.
      </p>
      <p className="text-gray-700 leading-7 mb-6">
        💻 Skilled in <strong>Java, Python, SQL</strong>, and full-stack web development 🌐. I’ve built projects using <strong>JavaScript, TypeScript, Node.js, Express</strong>, and other modern technologies.
      </p>
      <p className="text-gray-700 leading-7 mb-6">
        🚀 Some of my projects include:
        <ul className="list-disc ml-5 mt-2">
        <li><strong>Task Manager:</strong> A to-do list web app built to manage tasks, deadlines, and priorities with efficient UI/UX design.</li>
          <li><strong>CineView:</strong> A movie rating app where users can search for movies, rate them, and track their favorite ones.</li>
          <li><strong>BankEase:</strong> A web app to simplify banking tasks, with secure authentication, transaction management, and loan request systems.</li>
          <li><strong>Sudoku Game:</strong> A console-based game developed in Java where users can interactively solve puzzles with different difficulty levels.</li>
          <li><strong>Owe Owl:</strong> A finance tracker that records amounts owed by and to friends, with a split bill feature.</li>
        </ul>
      </p>
      <p className="text-gray-700 leading-7 mb-6">
        🤝 I'm a strong team player who learns quickly and adapts well to new technologies. Collaboration and clear communication are key to my success.
      </p>

      <p className="text-gray-700 leading-7 mb-6">
        🌱 Currently, I’m focused on building better UIs with <strong>React</strong> and exploring the power of <strong>backend APIs</strong> to create more dynamic applications.
      </p>

      <p className="text-gray-700 leading-7">
        ☕ When I'm not coding, you can find me solving puzzles, biking outdoors 🚴, or brewing the perfect cup of coffee.
      </p>

       <a
                href="/VENKATA_KIRAN_ADAPA_Resume.pdf"
                download
                className="text-success fs-4"
                style={{ textDecoration: "none" }}
              >
                <FaDownload />
               <span> Download My Resume</span>
              </a>
    </div>
  );
}

export default AboutMe;