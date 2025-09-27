import Navbar from "../components/Navbar";
import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <>
      <div className={styles.pageBackground}></div>
      <Navbar />
      <div className={styles.landingPage}>
        <div className={styles.infoSection}>
          <h1 className={styles.title}>Marcos Figueiredo</h1>
        </div>

        <div className={styles.eduSection}></div>
        <div className={styles.aboutSection}></div>
        <div className={styles.projectSection}></div>
      </div>
    </>
  );
}

export default LandingPage;
