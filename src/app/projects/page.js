import NavBar from "@/components/Navbar";
import Styles from "./Projects.module.css";
import ProjectCard from "@/components/projectComps/ProjectCard";
import GoBearImg from "@/assets/GoBearProject.png";
import TTTImg from "@/assets/TicTacToe.png";

function Projects() {
  return (
    <>
      <NavBar />
      <div className={Styles.container}>
        <h1 className={Styles.title}>My Favourite Projects</h1>

        <div className={Styles.projectsGrid}>
          <div className={Styles.projectCardWrapper}>
            <ProjectCard
              imgSrc={GoBearImg}
              title="AUT Capstone Project"
              desc={
                <>
                  <p>
                    As part of a six-person development team, I amm helping
                    design and build the Career Task Team feature for an
                    external company, supporting grassroots job seekers and
                    students. Serving as Scrum Master, I facilitate Agile
                    ceremonies, coordinate sprint planning, and ensure smooth
                    collaboration.
                  </p>
                  <p>
                    On the development side, I contribute to the full-stack
                    build using React, JSX, and Firebase, implementing features
                    and managing data to create a collaborative, gamified
                    task-management system aimed at improving career outcomes.
                  </p>
                  <p>
                    <em>
                      As of 23/09/2025, the project is ongoing and expected to
                      finish in early November.
                    </em>
                  </p>
                </>
              }
              alt="Testing"
              linkHref="https://github.com/sophiaullrich/FutureForgeProject"
              projectLink="https://future-forge-project.vercel.app/"
            />
          </div>
          <div className={Styles.projectCardWrapper}>
            <ProjectCard
              imgSrc={TTTImg}
              title="Tic-Tac-Toe"
              desc={
                <>
                  <p>Current Version: 1.0</p>
                  <p>
                    A basic Tic-Tac-Toe game, currently a work in progress.
                    Players can take turns on a simple 3x3 grid.
                  </p>
                  <p>Planned Updates:</p>
                  <p>1.1. Fix winner detection and draw functionality.</p>
                  <p>
                    1.2. Improve styling for a more game-like feel and better
                    user navigation.
                  </p>
                  <p>
                    2. Implement a MiniMax algorithm to enable playing against
                    the computer.
                  </p>
                </>
              }
              alt="Tic-Tac-Toe Project Image"
              linkHref="https://github.com/MarcosFig-dev/Tic-Tac-Toe"
              projectLink="https://marcosfig-dev.github.io/Tic-Tac-Toe/"
            />
          </div>
          {/* Add more ProjectCards here as needed */}
        </div>
      </div>
    </>
  );
}

export default Projects;
