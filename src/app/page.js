import Navbar from "../components/Navbar";
import Image from "next/image";
import profilePic from "../assets/profileImg.jpg";
import LandingCard from "../components/LandingCard";
import uniProjectsImg from "../assets/autProjects.jpg";
import certImg from "../assets/certImg.png";
import Styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <>
      <Navbar />
      <main className={Styles.container}>
        <h1 className="heading">Welcome to my portfolio!</h1>
        <Image
          src={profilePic}
          alt="Profile Picture"
          width={200}
          height={200}
          className={Styles.profilePic}
        />
        <div className={Styles.aboutme}>
          <h3 className="heading">About Me</h3>
          <p className="body-text">
            Hi, I’m Marcos. I’m a software development student at AUT. I am
            skilled in Frontend development and OOP. I combine hands-on coding
            experience with a strong teamwork and problem-solving mindset honed
            from years in retail.
          </p>
        </div>
        <div className={Styles.projectCards}>
          <h3 className="heading">Quick Projects Overview</h3>
          <div className={Styles.cardsRow}>
            <LandingCard
              title="Personal Projects"
              src={profilePic}
              link="/personal-projects"
            />
            <LandingCard
              title="University Projects"
              src={uniProjectsImg}
              link="/university-projects"
            />
            <LandingCard
              title="Certificates"
              src={certImg}
              link="/certificates"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default LandingPage;
