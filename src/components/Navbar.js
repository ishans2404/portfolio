import React, { useState } from "react";
import "./NavbarStyle.css";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaKaggle,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaArrowUp
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleCLick = () => setClick(!click);

  return (
    <nav className="header">
      <div className="logo">
        <Link 
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={30}
        >
          <div className="logo-img">
            <span className="blink"></span>
            <span></span><FaArrowUp className="blink" />
          </div>
        </Link>
      </div>
      <ul
        className={click ? "nav-menu active" : "nav-menu"}
        onClick={handleCLick}
      >
        <li>
          <Link
          className="navLink"
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            duration={30}
          >Projects</Link>
        </li>
        <li>
          <Link
          className="navLink"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={30}
          >About</Link>
        </li>
        <li>
          <Link
          className="navLink" 
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            duration={30}>Skills</Link>
        </li>
      </ul>
      <div className={click ? "social-links active" : "social-links"}>
        <a
          href="https://github.com/ishans2404"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className="social"
            size={25}
            style={{ marginRight: "2rem" }}
          />
        </a>
        <a
          href="https://leetcode.com/u/ishans24/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode
            className="social"
            size={25}
            style={{ marginRight: "2rem" }}
          />
        </a>
        <a
          href="https://www.kaggle.com/ishans24"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaKaggle
            className="social"
            size={25}
            style={{ marginRight: "2rem" }}
          />
        </a>
      </div>
      <div className="hamburger" onClick={handleCLick}>
        {click ? (
          <FaTimes className="bars" size={25} />
        ) : (
          <FaBars className="bars" size={25} style={{ color: "#fff" }} />
        )}
      </div>
    </nav>
  );
}
