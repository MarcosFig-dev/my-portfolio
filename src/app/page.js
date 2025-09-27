import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../assets/profileImg.jpg";
import Styles from "./LandingPage.module.css";
import GitHubLogo from "@/assets/githubLogo.svg";
import LinkedinLogo from "@/assets/linkedinLogo.svg";
import EduCard from "@/components/landingComps/EduCard/EduCard";
import SchoolIcon from "@/assets/school.svg";
import CodingIcon from "@/assets/codingIcon.svg";
import ProjectCards from "@/components/ProjectCards/ProjectCard";
import GoBearImg from "@/assets/GoBearProject.png";
import jsIcon from "@/assets/jsIcon.svg";
import reactIcon from "@/assets/reactIcon.svg";
import htmlIcon from "@/assets/htmlIcon.svg";
import cssIcon from "@/assets/cssIcon.svg";
import firebaseIcon from "@/assets/firebaseIcon.svg";

function LandingPage() {
  return (
    <>
      <Navbar />
      <main className={Styles.main}>
        <div className={Styles.introCont}>
          <div className={Styles.introLeft}>
            <h1 className={Styles.title}>Hello I&apos;m Marcos Figueiredo</h1>
            <p className={Styles.text}>An Aspiring Software Developer</p>
            <div className={Styles.introSocial}>
              <Link
                href="https://github.com/MarcosFig-dev"
                target="_blank"
                className={Styles.link}
              >
                <Image
                  src={GitHubLogo}
                  alt="GitHub Logo"
                  className={Styles.socialIcons}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/marcos-fig/"
                target="_blank"
                className={Styles.link}
              >
                <Image
                  src={LinkedinLogo}
                  alt="Linkedin Logo"
                  className={Styles.socialIcons}
                />
              </Link>
            </div>
          </div>
          <div className={Styles.introRight}>
            <Image
              src={profilePic}
              alt="Marcos Profile Picture"
              className={Styles.profImg}
            />
          </div>
        </div>

        <div className={Styles.subCont}>
          <div className={Styles.subHeader}>
            <Image
              src={SchoolIcon}
              alt="Drawing of a school building as an icon"
              className={Styles.subIcon}
            ></Image>
            <h2 className={Styles.subheading}>Education</h2>
          </div>

          <div className={Styles.subCards}>
            <EduCard
              name="Certificate in Science and Technology"
              date="2021 - 2022"
              location="Auckland University of Technology"
            />
            <EduCard
              name="Bachelor of Computer and Information Sciences"
              date="2022 - 2025"
              location="Auckland University of Technology"
            />
            <EduCard
              name="Certificate - Responsive Web Design"
              date="2023 - 2023"
              location="freeCodeCamp"
            />
          </div>
        </div>

        <div className={Styles.subCont}>
          <div className={Styles.subHeader}>
            <Image
              src={CodingIcon}
              alt="Icon of a computer with mock code"
              className={Styles.subIcon}
            />
            <h2 className={Styles.subheading}>
              A Few Of My Favourite Projects
            </h2>
          </div>
          <div className={Styles.subCards}>
            <ProjectCards
              imgSrc={GoBearImg}
              imgAlt="AUT capstone project screenshot"
              title="AUT Capstone Project"
              desc="As part of a six-person development team, I contributed to designing and building the Career Task Teams feature for an external company supporting grassroots job seekers and students. Serving as Scrum Master, I facilitated Agile ceremonies and coordinated sprint planning. On the development side, I implemented full-stack features using React, JSX, and Firebase, creating a collaborative, gamified task-management system aimed at improving career outcomes."
              techImg={[reactIcon, jsIcon, htmlIcon, cssIcon, firebaseIcon]}
              projectLink="https://future-forge-project.vercel.app/"
              codeLink="https://github.com/sophiaullrich/FutureForgeProject"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default LandingPage;
