import React, { useState} from "react";
import "./Skill.css";
import { MainHeadingWrapper} from "../../Elements/Elements";
import programmingSkils from "./img/programming-skills.svg"

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Front End", logoSrc: "programming-skills.svg" },
    { label: "Back End", logoSrc: "programming-skills.svg" }, 
    { label: "Database", logoSrc: "programming-skills.svg" },
    { label: "Languages", logoSrc: "programming-skills.svg" },
    { label: "Tools & Technology", logoSrc: "programming-skills.svg" },
  ];

  const frontEndSkills = [
    { skill: "HTML", logoURL: "https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" },
    { skill: "CSS", logoURL: "https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" },
    { skill: "Material-UI", logoURL: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" },
    { skill: "React JS", logoURL: "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" },
    { skill: "Redux", logoURL: "https://profilinator.rishav.dev/skills-assets/redux-original.svg" },
    { skill: "Next.js", logoURL: "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" },
  ];

  const backEndSkills = [
    { skill: "Node JS", logoURL: "https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" },
    { skill: "Express JS", logoURL: "https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" },
  ];

  const databaseSkills = [
    { skill: "MongoDB", logoURL: "https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" },
    { skill: "Redis", logoURL: "https://profilinator.rishav.dev/skills-assets/redis-original-wordmark.svg" },
    { skill: "MySQL", logoURL: "https://seeklogo.com/images/M/mysql-logo-B4943FE6DD-seeklogo.com.png" },
    { skill: "AWS-S3", logoURL: "https://logowik.com/content/uploads/images/amazon-s35310.jpg" },
  ];

  const languageSkills = [
    { skill: "JavaScript", logoURL: "https://profilinator.rishav.dev/skills-assets/javascript-original.svg" },
    { skill: "TypeScript", logoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" },
  ];

  const toolsSkills = [
    { skill: "Git", logoURL: "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" },
    { skill: "Postman", logoURL: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { skill: "GitHub", logoURL: "https://img.icons8.com/fluency/96/000000/github.png" },
  ];

  const resumeDetails = [

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills1"
    >
      {frontEndSkills.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <span>{skill.skill}</span>
          <div className="skill-icon"><img src={skill.logoURL} alt="HTML5" /></div>
        </div>
      ))}
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills2"
    >
      {backEndSkills.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <span>{skill.skill}</span>
          <div className="skill-icon"><img src={skill.logoURL} alt="HTML5" /></div>
        </div>
      ))}
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills3"
    >
      {databaseSkills.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <span>{skill.skill}</span>
          <div className="skill-icon"><img src={skill.logoURL} alt="HTML5" /></div>
        </div>
      ))}
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills4"
    >
      {languageSkills.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <span>{skill.skill}</span>
          <div className="skill-icon"><img src={skill.logoURL} alt="HTML5" /></div>
        </div>
      ))}
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills4"
    >
      {toolsSkills.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <span>{skill.skill}</span>
          <div className="skill-icon"><img src={skill.logoURL} alt="HTML5" /></div>
        </div>
      ))}
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={programmingSkils}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
      <MainHeadingWrapper>
        <h1>Skills & Interests</h1>
        <div></div>
      </MainHeadingWrapper>
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
