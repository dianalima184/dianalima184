import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
import Image from '../assets/github.png';
import JS from '../assets/JS.png';
import soft from '../assets/soft.png';
import chat from '../assets/chat.png';
import html from '../assets/html.png';
import sql from '../assets/sql.png';

const Skills = () => {
  return (
    <>
      {/* Original Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Diana</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/home" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/skills" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>Skills</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}>About Me</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <h1 className="visually-hidden">Skills</h1>

        <div className="container px-4 py-5" id="featured-3">
          <h2 className="pb-2 border-bottom">Skills</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="feature col">
              <div className="feature-icon no-bg d-inline-flex align-items-center justify-content-center text-bg-primary  bg-gradient fs-2 mb-3">
                <img src={Image} className="icon-img" alt="GitHub logo" />
              </div>
              <h3 className="fs-2 text-body-emphasis">Check out my Github</h3>
              <a href="https://github.com/dianalima184" className="icon-link">
                View Github
               
              </a>
            </div>
            <div className="feature col">
              <div className="feature-icon no-bg d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <img src={JS} className="icon-img" alt="JavaScript logo" />
              </div>
              <h3 className="fs-2 text-body-emphasis">Programming Languages</h3>
              <p>JavaScript, Python</p>
            </div>
            <div className="feature col">
              <div className="feature-icon no-bg d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <img src={soft} className="icon-img" alt="Soft skills icon" />
              </div>
              <h3 className="fs-2 text-body-emphasis">Soft Skills</h3>
              <p>Problem-solving, Communication, Collaboration</p>
            </div>
          </div>
        </div>

        {/* Front End and Backend Technologies */}
        <div className="container px-4 py-5" id="hanging-icons">
          <h2 className="pb-2 border-bottom"></h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            {/* AI Tools */}
            <div className="col d-flex align-items-start">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <img src={chat} className="icon-img" alt="ChatGPT logo" />
              </div>
              <div>
                <h3 className="fs-2 text-body-emphasis">AI Tools</h3>
                <p>ChatGPT, Claude: Usage for assisting with code generation, debugging, and brainstorming ideas.</p>
              </div>
            </div>

            {/* Front End Tools */}
            <div className="col d-flex align-items-start">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <img src={html} className="icon-img" alt="Frontend technologies like HTML and CSS" />
              </div>
              <div>
                <h3 className="fs-2 text-body-emphasis">Front End Tools</h3>
                <p>HTML, CSS, Bootstrap, React, Vite: Skilled in building responsive, scalable websites with a focus on user experience and performance.</p>
              </div>
            </div>

            {/* Backend Technologies */}
            <div className="col d-flex align-items-start">
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <img src={sql} className="icon-img" alt="Backend technologies like Node.js, Django, SQL" />
              </div>
              <div>
                <h3 className="fs-2 text-body-emphasis">Backend Technologies</h3>
                <p>Node.js, Django: Experienced in developing RESTful APIs, working with databases, and server-side logic.</p>
                <p>SQL: Knowledge of relational databases and proficient in querying, optimizing, and maintaining data.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Skills;
