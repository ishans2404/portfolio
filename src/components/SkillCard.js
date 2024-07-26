import React from 'react';
import "./SkillCardStyle.css";
import { CgCPlusPlus } from "react-icons/cg";
import { DiGit } from "react-icons/di";
import { SiScikitlearn, SiTensorflow, SiKeras, SiPandas, SiPytorch, SiFlask, SiJava, SiR, SiGooglecloud } from "react-icons/si";
import { TbBrandCss3, TbBrandJavascript, TbBrandHtml5 } from "react-icons/tb";
import { IoLogoWindows, IoLogoNpm } from "react-icons/io";
import { FaDocker, FaPython, FaAws } from "react-icons/fa";

// Note: These icons are not available in react-icons, so we may need to use alternatives or custom icons.
import { FaChartLine } from "react-icons/fa"; // Placeholder for Seaborn
import { FaImage } from "react-icons/fa"; // Placeholder for OpenCV

export default function SkillCard({ id }) {
  return (
    <div className="skill-container" id={id}>
      <div className="skill-header">My Skills</div>
      <div className="skill-box">
        <h2>Languages</h2>
        <div className="skillset">
          <abbr title='Python'><FaPython className='techLogo' /></abbr>
          <abbr title='C++'><CgCPlusPlus className='techLogo' /></abbr>
          <abbr title='Java'><SiJava className='techLogo' /></abbr>
        </div>
      </div>
      <div className="skill-box">
        <h2>Libraries and Frameworks</h2>
        <div className="skillset">
          <abbr title='TensorFlow'><SiTensorflow className='techLogo' /></abbr>
          <abbr title='Keras'><SiKeras className='techLogo' /></abbr>
          <abbr title='Scikit-learn'><SiScikitlearn className='techLogo' /></abbr>
          <abbr title='PyTorch'><SiPytorch className='techLogo' /></abbr>
          <abbr title='Flask'><SiFlask className='techLogo' /></abbr>
          <abbr title='JavaScript'><TbBrandJavascript className='techLogo' /></abbr>
          <abbr title='HTML 5'><TbBrandHtml5 className='techLogo' /></abbr>
        </div>
      </div>
      <div className="skill-box">
        <h2>Tools & Systems</h2>
        <div className="skillset">
          <abbr title='Google Cloud Platform'><SiGooglecloud className='techLogo' /></abbr>
          <abbr title='Git/Github'><DiGit className='techLogo' /></abbr>
          <abbr title='Pandas'><SiPandas className='techLogo' /></abbr>
          <abbr title='AWS'><FaAws className='techLogo'/></abbr>
          <abbr title='Docker'><FaDocker className='techLogo' /></abbr>
          <abbr title='Windows'><IoLogoWindows className='techLogo' /></abbr>
        </div>
      </div>
    </div>
  );
}
