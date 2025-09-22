import Navbar from "../components/Navbar";
import Image from "next/image";
import profilePic from "../assets/profileImg.jpg";

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="heading">Welcome to my portfolio!</h1>
        <Image
          src={profilePic}
          alt="Profile Picture"
          width={200}
          height={200}
        />
        <div className="about-me">
          <h3 className="heading">About Me</h3>
          <p className="body-text">
            Hi, I’m Marcos. I’m a software development student at AUT, building
            intuitive web apps and innovative tech. Skilled in Frontend
            development and OOP, I combine hands-on coding experience with a
            strong teamwork and problem-solving mindset honed from years in
            retail.
          </p>
        </div>
        <div className="project-slideshow">
          <h3 className="heading">Quick Projects Overview</h3>
          {/* Slide show of projects */}
        </div>
      </main>
    </>
  );
}

export default LandingPage;
