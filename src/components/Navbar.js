import React from "react";

import { Link } from "react-router-dom";  


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">

        <a className="navbar-brand" >Diana Lima</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/home">Home</Link>  
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Me</Link>  
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">Skills</Link> 
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
