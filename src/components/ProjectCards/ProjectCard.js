import Styles from "./ProjectCard.module.css";
import Image from "next/image";

function ProjectCard({ imgSrc, imgAlt, title, desc, techImg }) {
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
    </div>
  );
}

export default ProjectCard;
