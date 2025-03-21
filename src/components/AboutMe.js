import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';


// Add this definition after your other SVG components
const ArrowRightSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg>
);
const CheckCircleSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" className="mb-3" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
  </svg>
);



// Jumbotron components
const JumbotronWithIcon = () => (
  <div className="container my-5">
    <div className="p-5 text-center bg-body-tertiary rounded-3">
    
      <h1 className="text-body-emphasis">Hello I'm Diana...</h1>
      <p className="col-lg-8 mx-auto fs-5 text-muted">
    I am full stack software engineer and founder of Webvex, a tech startup focused on modern web solutions. I also run The Digital Ethos, a blog exploring technology and digital ethics. Beyond work, I volunteer at The Midnight Mission a homeless shelter and engage with the organization Society of Professional Hispanic Engineers (SPHE).


    </p>
<div className="d-inline-flex gap-2 mb-5">
  <a 
    href="https://www.linkedin.com/in/diana156/" 
    className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
  >
    View Linkedin
    <ArrowRightSVG />
  </a>
 
</div>
</div>
</div>
);
const PlaceholderJumbotron = () => (
  <div className="container my-5">
    <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
      <button type="button" className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill" aria-label="Close"></button>
      <CheckCircleSVG />
      <h1 className="text-body-emphasis">Learn about Webvex</h1>
      <p className="col-lg-6 mx-auto mb-4">
        Webvex is a tech startup focused on creating innovative solutions that harness the power of software development to drive efficiency and growth for businesses. I started this business out of my passion for software development and the desire to help organizations unlock their full potential through cutting-edge technology.
      </p>
      <a href="https://www.instagram.com/webvex.io/">
        <button className="btn btn-primary px-5 mb-5" type="button">
          Explore Webvex
        </button>
      </a>
    </div>
  </div>
);


const FullWidthJumbotron = () => (
  <div className="my-5">
    <div className="p-5 text-center bg-body-tertiary">
      <div className="container py-5">
        <h1 className="text-body-emphasis">The Digital Ethos</h1>
        <p className="col-lg-8 mx-auto lead">
        The Digital Ethos delves into the values, ethics, and societal impact shaped by the ever-evolving digital landscape. Created out of my passion for staying up to date with the latest happenings in the tech world, it aims to uncover how technology influences our lives, work, and relationships in the digital age. 
        </p>
        <a 
    href="https://medium.com/@TheDigitalEthos" 
    className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
  >
    View The Digital Ethos
    <ArrowRightSVG />
  </a>
      </div>
    </div>
  </div>
);

const BasicJumbotron = () => (
  <div className="container my-5">
    <div className="p-5 text-center bg-body-tertiary rounded-3">
      <h1 className="text-body-emphasis"></h1>
      <p className="lead"/>
      Technology is a powerful force in our society. Data, software, and communication can be used for bad: to entrench unfair power structures, to undermine human rights, and to protect vested interests. But they can also be used for good: to make underrepresented people's voices heard, to create opportunities for everyone, and to avert disasters. 
    </div>
  </div>
);

const Divider = () => (
  <div className="b-example-divider"></div>
);

const AboutMe = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Diana</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/home" className="nav-link" activeClassName="active-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/skills" className="nav-link" activeClassName="active-link">Skills</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" activeClassName="active-link">About Me</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Jumbotrons */}
      <JumbotronWithIcon />
      <Divider />
      <PlaceholderJumbotron />
      <Divider />
      <FullWidthJumbotron />
      <Divider />
      <BasicJumbotron />
      <Divider />
    </>
  );
};

export default AboutMe;