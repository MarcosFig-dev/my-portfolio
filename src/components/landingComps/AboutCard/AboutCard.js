import Styles from "./AboutCard.module.css";

function AboutCard({ title, desc }) {
  return (
    <div className={Styles.card}>
      <h3 className={Styles.title}>{title}</h3>
      <p className={Styles.desc}>{desc}</p>
    </div>
  );
}

export default AboutCard;
