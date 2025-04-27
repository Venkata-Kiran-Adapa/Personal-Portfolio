import './header.css'
import { FaHome, FaUser, FaTools, FaFolderOpen } from "react-icons/fa";


function Header({setCurrentPage}) {
    return (
        <nav className='text-black fw-medium navbar' >
        <h4 className='headerdisplay'>Venkata Kiran Adapa </h4>
        <ul>
        <li onClick={() => setCurrentPage("home")}><FaHome style={{ marginRight: "8px" }}/><span className='headerdisplay'>Home</span></li>
        <li onClick={() => setCurrentPage("about")}><FaUser style={{ marginRight: "8px" }}/><span className='headerdisplay'>About</span></li>
        <li onClick={() => setCurrentPage("skills")}><FaTools style={{ marginRight: "8px" }}/><span className='headerdisplay'>Skills</span></li>
        <li onClick={() => setCurrentPage("projects")}><FaFolderOpen style={{ marginRight: "8px"}}/><span className='headerdisplay'>Project</span></li>
        </ul>
      </nav>
    );
  }
  
  
  export default Header;
  