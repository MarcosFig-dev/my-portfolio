import NavBar from "@/components/Navbar";
import Styles from "./Projects.module.css";
import ProjCards from "@/components/ProjectCards/ProjectCard";
import GoBearImg from "@/assets/GoBearProject.png";
import TTTImg from "@/assets/TicTacToe.png";
import jsIcon from "@/assets/jsIcon.svg";
import reactIcon from "@/assets/reactIcon.svg";
import htmlIcon from "@/assets/htmlIcon.svg";
import cssIcon from "@/assets/cssIcon.svg";
import firebaseIcon from "@/assets/firebaseIcon.svg";

function Projects() {
  return (
    <>
      <div className={Styles.pageBackground}></div>
      <NavBar />
      <div className={Styles.container}>
        <h1 className={Styles.title}>My Projects</h1>

        <div className={Styles.projectsGrid}>
          <div className={Styles.projectCardWrapper}>
            <ProjCards
              imgSrc={GoBearImg}
              imgAlt="Aut RnD project screenshot"
              title="AUT Capstone Project"
              desc="As part of a six-person development team, I contributed to designing and building the Career Task Teams feature for an external company supporting grassroots job seekers and students. Serving as Scrum Master, I facilitated Agile ceremonies and coordinated sprint planning. On the development side, I implemented full-stack features using React, JSX, and Firebase, creating a collaborative, gamified task-management system aimed at improving career outcomes."
              techImg={[reactIcon, jsIcon, htmlIcon, cssIcon, firebaseIcon]}
              projectLink="https://future-forge-project.vercel.app/"
              codeLink="https://github.com/sophiaullrich/FutureForgeProject"
            />
          </div>
          <div className={Styles.projectCardWrapper}>
            <ProjCards
              imgSrc={TTTImg}
              imgAlt="Tic-Tac-Toe Project Image"
              title="Tic-Tac-Toe"
              desc="A basic Tic-Tac-Toe game, currently a work in progress. Players can take turns on a simple 3x3 grid."
              techImg={[reactIcon, jsIcon, htmlIcon, cssIcon]}
              projectLink="https://marcosfig-dev.github.io/Tic-Tac-Toe/"
              codeLink="https://github.com/MarcosFig-dev/Tic-Tac-Toe"
            />
          </div>
          {/* Add more ProjectCards here as needed */}
        </div>
      </div>
    </>
  );
}

export default Projects;
