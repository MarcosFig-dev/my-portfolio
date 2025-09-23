"use client";
import Image from "next/image";
import Styles from "./CertCards.module.css";
import { useState } from "react";
import Link from "next/link";

function CertCard({ certName, certImg, certDesc, certAlt, projects }) {
  const [showProjects, setShowProjects] = useState(false);

  const handleShowProjects = () => {
    setShowProjects(!showProjects);
  };

  return (
    <div>
      <Link
        href="https://www.freecodecamp.org/certification/marcos_figueiredo/responsive-web-design"
        target="_blank"
      >
        <div className={Styles.container}>
          <h3 className="heading">{certName}</h3>
          <br />

          <Image src={certImg} alt={certAlt} className={Styles.certImage} />

          <p className="body-text">{certDesc}</p>
        </div>
      </Link>
      <button onClick={handleShowProjects} className={Styles.button}>
        {showProjects ? "Hide Projects" : "Show Projects"}
      </button>
      {showProjects && (
        <div className={Styles.projectContainer}>
          {projects.map((project) => (
            <iframe
              key={project.name}
              src={project.src}
              title={project.name}
              className={Styles.projectIframe}
            ></iframe>
          ))}
        </div>
      )}
    </div>
  );
}

export default CertCard;
