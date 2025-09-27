import Styles from "./ProjectCard.module.css";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({
  imgSrc,
  imgAlt,
  title,
  desc,
  techImg,
  projectLink,
  codeLink,
}) {
  return (
    <div className={Styles.card}>
      <Image
        src={imgSrc}
        alt={imgAlt || "Project Image"}
        className={Styles.image}
      />
      <h2 className={Styles.header}>{title}</h2>
      <p className={Styles.desc}>{desc}</p>
      <div className={Styles.techIcons}>
        {techImg.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Tech Image ${index + 1}`}
            style={{ "--i": index / techImg.length }}
          />
        ))}
      </div>
      <div className={Styles.btnDiv}>
        <Link href={projectLink} className={Styles.link} target="_blank">
          <button className={Styles.button}>View Live Project</button>
        </Link>
        <Link href={codeLink} className={Styles.link} target="_blank">
          <button className={Styles.button}>View Code</button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
