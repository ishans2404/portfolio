import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard'
import AboutMe from './components/AboutMe'
import SkillCard from './components/SkillCard'
import AnimatedCursor from "react-animated-cursor"
import ParticlesComponent from "./components/particles"

function App() {
  return (
    <>
    <AnimatedCursor
      color="#fff"
      innerSize={8}
      outerSize={50}
      innerScale={1}
      outerScale={2.2}
      outerAlpha={0}
      outerStyle={{
        background: '#ffffff',
        mixBlendMode: 'exclusion'
      }}
      innerStyle={{
        backgroundColor: '#457cbe'
      }}
    />
    <>
      <ParticlesComponent id="particles" />
    </>
    <div>
      <Navbar />
      <HomeBanner id = "home"/>
      <ProjectCard
        id = "project"
        className = "odd"
        projectTitle="NeuralPDF: Interactive PDF Chat Web App"
        projectDesc="NeuralPDF leverages Streamlit and Google Generative AI for an interactive PDF exploration experience, featuring modes like Chat, Quiz, and Long-Answer Questions to boost engagement and comprehension."
        projectLink="https://github.com/ishans2404/NeuralPDF"
        deployedProjectLink="https://huggingface.co/spaces/ishans24/NeuralPDF"
        projectImg={require('./images/p1.png')}
      />

      <ProjectCard
        projectTitle="Goldman Sachs Stock Price Time Series Analysis"
        projectDesc="This project aims to predict the future closing prices of Goldman Sachs (GS) stock using a Long Short-Term Memory (LSTM) neural network. LSTM models are particularly suitable for sequence prediction tasks like stock price forecasting due to their ability to capture temporal dependencies in data."
        projectLink="https://github.com/ishans2404/gs-stock-prices"
        // deployedProjectLink="https://deepajha14.github.io/Touch-me-not-Card/"
        projectImg={require('./images/p2.jpeg')}
      />

      <ProjectCard
        className = "odd"
        projectTitle="CovidVision: Advanced COVID-19 Detection from Lung X-rays with Deep Learning"
        projectDesc="This project aims to utilize deep learning algorithms to analyze lung X-ray images for signs of COVID-19 infection. This system provides accurate and rapid diagnosis to aid in the early detection and containment of the virus."
        projectLink="https://github.com/ishans2404/covid-detection-xray"
        deployedProjectLink="https://huggingface.co/spaces/ishans24/covid19-detection-xray"
        projectImg={require('./images/p3.png')}
      />
      <AboutMe id = 'about' />
      <SkillCard id = 'skills' />
    </div>
    </>
  );
}

export default App;
