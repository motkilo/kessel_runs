import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

function Navbar() {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        MOTKILO
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/home"
                ? "nav-link active" : "nav-link"
              }
            >
            Home
            </Link>
          </li>
          <li className="nav-item"> 
            <Link to="/about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
            About
            </Link> 
          </li>
          <li className="nav-item"> 
            <Link to="/projects"
              className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
            >
            Projects
            </Link> 
          </li>
          <li className="nav-item">
            <Link to="/kessels"
              className={window.location.pathname === "/kessels" ? "nav-link active" : "nav-link"}
            >
            Kessels
            </Link>
          </li>
          <li className="nav-item"> 
            <Link to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
            Contact
            </Link> 
          </li>
          <li className="nav-item"> 
            <Link to="/createrun"
              className={window.location.pathname === "/createrun" ? "nav-link active" : "nav-link"}
            >
            Create Run
            </Link> 
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
