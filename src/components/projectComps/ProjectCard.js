"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Styles from "./ProjectCard.module.css";

function FeatProjCard({ imgSrc, imgAlt, title, desc, projectLink, linkHref }) {
  const [showProject, setShowProject] = useState(false);

  const handlePopUp = () => {
    setShowProject(!showProject);
  };

  return (
    <div className={Styles.card}>
      <Image src={imgSrc} alt={imgAlt} className={Styles.image} />
      <h3 className={Styles.title}>{title}</h3>
      <div className={Styles.overlay} onClick={handlePopUp}>
        <div className={Styles.desc}>{desc}</div>
      </div>
      <button className={Styles.button}>
        {showProject ? "Hide Preview" : "Preview Project"}
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
      <Link href={linkHref} target="_blank">
        <button className={Styles.button}>View On GitHub</button>
      </Link>
    </div>
  );
}

export default FeatProjCard;
