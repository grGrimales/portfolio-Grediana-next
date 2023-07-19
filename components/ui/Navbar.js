import { useEffect, useState } from "react";

import NextLink from "next/link";
import { Link, animateScroll as scroll } from "react-scroll";

import styles from "../../styles/Navbar.module.scss";

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
            <NextLink href="/" passHref>
              <h3>Grediana</h3>
            </NextLink>

            <div className={styles["header__icon"]} onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
          </div>

          <div className={styles["containerNav"]}>
            <nav className={`${styles.containerNav__nav}`}>
              <ul
                className={`${styles.containerNav__list} ${click ? styles.activeUl : ""
                  }`}
              >

                <li >
                  <Link to='aboutMe'
                    onClick={handleClickLink}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>SOBRE MIM</Link>
                </li>
                <li >
                  <Link to='skills'
                    onClick={handleClickLink}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>FERRAMENTAS</Link>
                </li>
                <li >
                  <Link to='formation'
                    onClick={handleClickLink}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>FORMAÇÃO</Link>
                </li>

                <li >
                  <Link to='services'
                    onClick={handleClickLink}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>SERVIÇOS</Link>
                </li>

                <li >
                  <Link to='projects'
                    onClick={handleClickLink}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>PROJETOS</Link>
                </li>
                <li >
                  <Link to='contact'
                    onClick={handleClickLink}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>CONTATO</Link>
                </li>

              </ul>

            </nav>
          </div>
        </div>
      </header>

    </>
  );
};
