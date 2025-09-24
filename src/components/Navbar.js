import Link from "next/link";
import Styles from "./Navbar.module.css";

function NavBar() {
  return (
    <nav className={Styles.nav}>
      <ul className={Styles.navList}>
        <li>
          <Link href="/" className={Styles.navItem}>
            Home
          </Link>
        </li>
        {/* <li>
          <Link href="/about" className={Styles.navItem}>
            More About Me
          </Link>
        </li> */}
        {/* <li>
          <Link href="/contact" className={Styles.navItem}>
            Contact
          </Link>
        </li> */}
        <li>
          <Link href="/projects" className={Styles.navItem}>
            My Favourite Projects
          </Link>
        </li>
        <li>
          <Link href="/certificates" className={Styles.navItem}>
            Certificates
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
