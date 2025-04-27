import React from "react";
import "./project.css";

function Project() {
  return (
    <div className="project-container">
      <div className="scrollable-cards">
    <h2>Projects Overview</h2>
        <div className="card bg-dark text-white" >
          <img src="/cineview.png" className="card-img-top" alt="cineview" />
          <div className="card-body">
            <h5 className="card-title text-center">Cine View</h5>
          </div>
        </div>
        
        <div className="card bg-dark text-white" >
          <img src="/taskManager.png" className="card-img-top" alt="taskManager" />
          <div className="card-body">
            <h5 className="card-title text-center">Task Manager</h5>
          </div>
        </div>


        <div className="card bg-dark text-white" >
          <img src="/BankEase.png" className="card-img-top" alt="BankEase" />
          <div className="card-body">
            <h5 className="card-title text-center">BankEase</h5>
          </div>
        </div>

        <div className="card bg-dark text-white" >
          <img src="/sudoku.webp" className="card-img-top" alt="sudoku" />
          <div className="card-body">
            <h5 className="card-title text-center">Sudoku game</h5>
          </div>
        </div>

        <div className="card bg-dark text-white" >
          <img src="/oweowl.png" className="card-img-top" alt="oweowl" />
          <div className="card-body">
            <h5 className="card-title text-center">OweOwl</h5>
          </div>
        </div>

        <div className="card bg-dark text-white" >
          <img src="/stocks.webp" className="card-img-top" alt="Financial Portfolio Management" />
          <div className="card-body">
            <h5 className="card-title text-center">Financial Portfolio Management</h5>
          </div>
        </div>
        
         <p className="text-center"> Visit Projects Section for more</p>
      </div>
    </div>
  );
}


export default Project;
