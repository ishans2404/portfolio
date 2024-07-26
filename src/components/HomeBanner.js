import React from 'react';
import "./HomeBannerStyle.css";
import image from "../images/file.png";
import { FaLinkedinIn } from "react-icons/fa";

export default function HomeBanner({id}) {
  return (
    <div className="home" id={id}> 
        <div className='content'>
            <div className="wrapper">
              <div className="name">AI - ML - Data Science</div>
              <div className="staticTitle">
                Ishan
                <div className='hrLine'></div>
              </div>
              <ul className="dynamicTitle">
                <li><span>Singh</span></li>
              </ul>
              <a className='btn'
                href="https://www.linkedin.com/in/ishan-singh-309720250/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn
                  className="social"
                  size={25}
                />
              </a>
              </div>
        </div>
        {/*
        <div className="mask">
            <img className='bg' src={image} alt="girl-with-laptop" />
        </div>
        */}
    </div>
  )
}
