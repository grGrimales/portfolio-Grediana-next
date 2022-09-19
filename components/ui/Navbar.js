import { useEffect, useState } from "react";

import Link from "next/link";

import styles from "../../styles/Navbar.module.scss";
import { ActiveLink } from "./ActiveLink";

export const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleClickLink = () => setClick(false)

  useEffect(() => {
    window.onscroll = function () {
      const scrollTop = document.documentElement.scrollTop;

      if (scrollTop > 20) {
        setScroll(true);
      } else if (scrollTop < 20) {
        setScroll(false);
      }
    };

    const handleInnerWidth = () => {
      if (window.innerWidth > 992) {
        setClick(false);
      }
    };

    window.addEventListener("resize", handleInnerWidth);

    return () => {
      window.removeEventListener("resize", handleInnerWidth);
    };
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scroll ? styles.nav_mod : ""}`}>
        <div className={styles["container__header"]}>
          <div className={styles.logo}>
            <Link href="/">
              <h3>Grediana</h3>
            </Link>

            <div className={styles["header__icon"]} onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
          </div>

          <div className={styles["containerNav"]}>
            <nav className={`${styles.containerNav__nav}`}>
              <ul
                className={`${styles.containerNav__list} ${
                  click ? styles.activeUl : ""
                }`}
              >
               
                <li  onClick={handleClickLink}>
                  <ActiveLink link="/#aboutMe" text="Sobre mi" />
                </li>

                <li  onClick={handleClickLink} >
                  <ActiveLink link="/#skills" text="Herramientas" />
                </li>
                <li  onClick={handleClickLink}>
                  <ActiveLink link="/#formation" text="Formación" />
                </li>

                <li  onClick={handleClickLink} >
                  <ActiveLink link="/#projects" text="Proyectos" />
                </li>


                <li  onClick={handleClickLink} >
                  <ActiveLink link="/#contact" text="Contacto" />
                </li>
              </ul>

            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
