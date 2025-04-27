import "./projectsinfo.css";
import {FaGithub } from "react-icons/fa";
const projects = [
  {
    name: "Task Manager",
    image: "taskManager.png",
    description:
      "Task Manager is a full-stack web app built with Node.js, Express.js, MongoDB, TypeScript, offering a clean, responsive UI for task management. It supports user authentication, task creation, editing, deletion, completion tracking, and persistent storage.",
    link: "https://github.com/Venkata-Kiran-Adapa/Task_Manager",
  },
  {
    name: "CineView",
    image: "cineview.png",
    description:
      "CineView is a sleek movie search app built with React  that fetches real-time data from an external API. Users can explore different movies of their Interests",
    link: "https://github.com/Venkata-Kiran-Adapa/CineView",
  },
  {
    name: "Sudoku Game (Java)",
    image: "sudoku.webp",
    description:
      "Sudoku Pack is a console-based Java game offering three predefined Sudoku boards for users to solve interactively. It enforces standard Sudoku rules and validates every move for a logic-driven challenge.",
    link: "https://github.com/Venkata-Kiran-Adapa/Mini-Projects-using-java/tree/master/Sudoku",
  },
  {
    name: "Owe Owl",
    image: "oweowl.png",
    description:
      "Owe Owl is a smart expense-sharing app to track money owed between friends. Features include bill splitting, balance adjustments, and clear tracking of who owes whom.",
    link: "https://github.com/Venkata-Kiran-Adapa/Owe-Owl",
  },
  {
    name: "Pack-O-Saurus",
    image: "Pack.png",
    description:
      "A React app to help users organize and track essential items for a trip. It allows adding, editing, and marking items as packed to ensure nothing is forgotten.",
    link: "https://github.com/Venkata-Kiran-Adapa/Pack-O-Saurus",
  },
  {
    name: "Financial Portfolio Management",
    image: "stocks.webp",
    description:
      "A Deep Reinforcement Learning app that optimizes financial portfolios using stock data. It trains a PPO agent to make investment decisions and visualizes performance metrics like Sharpe ratio and drawdowns.",
    link: "https://github.com/Venkata-Kiran-Adapa/Financial-Portfolio-Management",
  },
  {
    name: "Movies API",
    image: "movies-APi.png",
    description:
      "Movies API is a backend application built with Node.js and Express.js that provides RESTful endpoints to fetch, add, update, and delete movie data. Designed for easy integration with front-end clients and supports JSON-based responses.",
    link: "https://github.com/Venkata-Kiran-Adapa/Movies-Api",
  },
  {
    name: "BankEase",
    image: "BankEase.png",
    description:
      "BankEase is a user-friendly banking app built with HTML, CSS, JavaScript, and TypeScript that simulates secure login, balance checks, fund transfers, loan requests, and auto log-out. Designed to enhance user experience with smooth interactions and complete account protection.",
    link: "https://github.com/Venkata-Kiran-Adapa/BankEase",
  },
  {
    name: "Authentic-Indian-Delights",
    image: "Authentic-Indian-Delights.png",
    description:
      "A simple React app that displays a menu with various food items, allowing users to browse through the available options.",
    link: "https://github.com/Venkata-Kiran-Adapa/Authentic-Indian-Delights",
  },
  {
    name: "Bicycle E-Commerce Website",
    image: "E-commerce.png",
    description:
      "Bicycle E-Commerce Website is a front-end web app built with HTML, CSS, and JavaScript that displays a catalog of bicycles with images, names, and prices. Includes a basic login feature but does not support cart or payment functionality.",
    link: "https://github.com/Venkata-Kiran-Adapa/E-Commerce-Website",
  },
  {
    name: "Tic Tac Toe (Java)",
    image: "tic-tac-toe.jpg",
    description:
      "Tic Tac Toe is a classic 2-player game built with Java, focusing on array-based logic and clean console interaction. Detects wins, draws, and ensures valid moves throughout the game.",
    link: "https://github.com/Venkata-Kiran-Adapa/Tic-Tac-Toe-game-using-Java",
  },
  {
    name: "Rock Paper Scissors (Java)",
    image: "rockpaperscissors.jpg",
    description:
      "Rock Paper Scissors is a fun console game where users compete against the computer in rock-paper-scissors rounds. Built using basic Java and arrays, it tracks outcomes and encourages replay.",
    link: "https://github.com/Venkata-Kiran-Adapa/Mini-Projects-using-java/tree/master/Rock_Paper_Scissors",
  },
];

function ProjectInfo() {
  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div className="card"  key={project.name}>
          <img
            src={project.image}
            className="card-img-top"
            alt={project.name}
          />
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text fw-light">{project.description}</p>
            <a href={project.link} className="btn btn-black text-bg-black bg-gradient bg-opacity-75 text-white" >
            <FaGithub />
            <span style={{margin:'0px 2px'}}> View</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectInfo;
