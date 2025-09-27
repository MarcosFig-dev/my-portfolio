"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
function NavBar() {
  const pathname = usePathname();
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/Projects" },
    { name: "Qualifications", href: "/Qualifications" },
    { name: "About Me", href: "/about" },
  ];
  return (
    <div className={styles.nav}>
      <div className={styles.navList}>
        {navItems.map((item) => (
          <div
            key={item.href}
            className={pathname === item.href ? styles.active : ""}
          >
            <Link href={item.href} className={styles.navItem}>
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default NavBar;
