import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/img.jpeg";

export default function AboutMe({ id }) {
  return (
      <div className="about-container" id={id}>
        <div className="aboutMe-text">
          <h3>Hello!👋</h3>
          I'm <span> Ishan </span>, a Computer Science & Engineering student at <span>VIT Vellore</span>. My coursework in Data Structures, Algorithms, and AI has equipped me with a solid technical foundation. I’ve developed several impactful projects, including <span>NeuralPDF</span>, an AI-driven web app for interactive PDF exploration, and a <span>stock market analysis</span> tool using advanced visualization and predictive modeling. My work in healthcare through a <span>COVID-19 detection</span> model achieved 98.1% accuracy, and I’ve created a toxic comment classification system with 98% accuracy.
          <br/> <br/>
          I’m skilled in Python, C++, TensorFlow, and various data science tools, with certifications from <span>Google Cloud</span> in Prompt Design and <span>Generative AI</span>. I’m eager to leverage my skills and passion for technology in meaningful projects.
        </div>
        <div className="profile-photo">
          <div className="heading">;) </div>
          <img className="img" src={myProfile} alt="Profile"></img>
        </div>
        <div className="name"></div>
      </div>
  );
}
