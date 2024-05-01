import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { socialMediaUrl } from "../Details";
import logo from "../logo.svg";
import githubL from "../images/github.svg";
import linkedinL from "../images/linkedin.svg";
import bars from "../images/bars-solid.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkedin, github } = socialMediaUrl;
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div >
      <nav className="navbar navbar-expand-lg sticky-top" >
        <div className="ms-4 container-fluid ">
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            onClick={toggleClass}
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <img src={bars} height="30" alt="Lo" loading="lazy" />
          </button>
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <NavLink to="/" className="navbar-brand mt-2 d-none d-lg-flex me-5 mt-lg-0">
              <img src={logo} height="30" alt="Lo" loading="lazy" />
            </NavLink>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink to="/" className="nav-link fs-4 ms-3 text-light " onClick={toggleClass}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link text-light ms-3 " onClick={toggleClass}>
                <div className="fs-4">About</div>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/technologies"
                  className="nav-link fs-4  text-light ms-3 "
                  onClick={toggleClass}
                >
                  Technologies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Projects"
                  className="nav-link fs-4 text-light ms-3 "
                  onClick={toggleClass}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link fs-4  text-light ms-3 "
                  onClick={toggleClass}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="d-flex me-4 align-items-center">
            <a href={linkedin} className="me-3">
              <img src={linkedinL} height="30" alt="Lo" loading="lazy" />
            </a>
            <a href={github} className="ms-3">
              <img src={githubL} height="30" alt="Lo" loading="lazy" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
