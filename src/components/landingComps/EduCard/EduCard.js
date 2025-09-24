import Styles from "./EduCard.module.css";

function EduCard({ name, date, location }) {
  return (
    <div className={Styles.card}>
      <h2 className={Styles.title}>{name}</h2>
      <p className={Styles.date}>{date}</p>
      <p className={Styles.location}>{location}</p>
    </div>
  );
}

export default EduCard;
