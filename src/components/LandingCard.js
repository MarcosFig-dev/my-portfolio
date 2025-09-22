import Link from "next/link";
import Styles from "./LandingCard.module.css";
import Image from "next/image";

function LandingCard({ title, src, link }) {
  return (
    <Link href={link}>
      <div className={Styles.container}>
        <Image src={src} className={Styles.image} alt="Portfolio Image" />
        <div className={Styles.overlay}>
          <h3 className={Styles.text}>{title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default LandingCard;
