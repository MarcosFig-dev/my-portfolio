"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Styles from "./FavProjectCard.module.css";

function FavProjectCard({ imgSrc, title, desc, alt, linkHref, projectLink }) {
  const [showProject, setShowProject] = useState(false);

  const handleShowProjects = () => {
    setShowProject(!showProject);
  };

  return (
    <div className={Styles.card}>
      <h3 className="heading">{title}</h3>
      <Image src={imgSrc} alt={alt} className={Styles.image} />
      {desc}
      <button onClick={handleShowProjects} className={Styles.button}>
        {showProject ? "Hide Project" : "Show Project"}
      </button>

      {showProject && (
        <div className={Styles.projectContainer}>
          <iframe
            src={projectLink}
            title={title}
            className={Styles.projectIframe}
          ></iframe>
        </div>
      )}

      <Link href={linkHref} target="_blank" className={Styles.button}>
        View On GitHub
      </Link>
    </div>
  );
}

export default FavProjectCard;
