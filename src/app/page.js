import Navbar from "../components/Navbar";
import styles from "./LandingPage.module.css";
import EduCard from "@/components/landingComps/EduCard/EduCard";
import ProjCards from "@/components/ProjectCards/ProjectCard";
import GoBearImg from "@/assets/GoBearProject.png";
import jsIcon from "@/assets/jsIcon.svg";
import reactIcon from "@/assets/reactIcon.svg";
import htmlIcon from "@/assets/htmlIcon.svg";
import cssIcon from "@/assets/cssIcon.svg";
import firebaseIcon from "@/assets/firebaseIcon.svg";

function LandingPage() {
  return (
    <>
      <div className={styles.pageBackground}></div>
      <Navbar />
      <div className={styles.landingPage}>
        <div className={styles.infoSection}>
          <h1 className={styles.title}>Hello I&apos;m Marcos Figueiredo</h1>
          <p className={styles.subText}>
            Software development student at AUT building user-friendly,
            innovative web and mobile apps with a focus on JavaScript, React,
            and Firebase.
          </p>
        </div>

        <div className={styles.eduSection}>
          <h2 className={styles.subHeading}>Education</h2>
          <div className={styles.eduCards}>
            <EduCard
              name="Bachelor of Computer and Information Sciences"
              date="2022 - 2025"
              location="Auckland University of Technology"
            />
            <EduCard
              name="Certificate in Science and Technology"
              date="2021"
              location="Auckland University of Technology"
            />
            <EduCard
              name="Certificate - Responsive Web Design"
              date="2023"
              location="freeCodeCamp"
            />
          </div>
        </div>
        <div className={styles.aboutSection}>
          <h2 className={styles.subHeading}>A Little About Me</h2>
          <p className={styles.subText}>
            I&apos;m Marcos Figueiredo, a software development student at
            Auckland University of Technology with a passion for turning ideas
            into intuitive digital experiences. Through hands-on projects and
            coursework, I&apos;ve built strong skills in JavaScript, React,
            Node.js, and Firebase. From creating multi-game AI agents to
            full-stack budgeting tools and high-fidelity UX prototypes.
          </p>
          <p className={styles.subText}>
            My experience isn&apos;t limited to code. Years of customer-facing
            work since 2017 have honed my communication, teamwork, and
            problem-solving skills, which I bring to every project. Whether
            it&apos;s designing a clean UI, implementing complex back-end logic,
            or collaborating with a team to deliver a prototype, I enjoy
            bridging the gap between technical solutions and real-world user
            needs.
          </p>
          <p className={styles.subText}>
            I&apos;m currently building a portfolio of projects that showcase my
            ability to design, develop, and deploy responsive, user-centered
            applications, and I&apos;m eager to contribute these skills to
            graduate or internship opportunities in software development and
            engineering.
          </p>
        </div>
        <div className={styles.projectSection}>
          <h2 className={styles.subHeading}>My Favourite Projects</h2>
          <div className={styles.projectCards}>
            <ProjCards
              imgSrc={GoBearImg}
              imgAlt="Aut RnD project screenshot"
              title="AUT Capstone Project"
              desc="As part of a six-person development team, I contributed to designing and building the Career Task Teams feature for an external company supporting grassroots job seekers and students. Serving as Scrum Master, I facilitated Agile ceremonies and coordinated sprint planning. On the development side, I implemented full-stack features using React, JSX, and Firebase, creating a collaborative, gamified task-management system aimed at improving career outcomes."
              techImg={[reactIcon, jsIcon, htmlIcon, cssIcon, firebaseIcon]}
              projectLink="https://future-forge-project.vercel.app/"
              codeLink="https://github.com/sophiaullrich/FutureForgeProject"
            />
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
        </div>
      </div>
    </>
  );
}

export default LandingPage;
