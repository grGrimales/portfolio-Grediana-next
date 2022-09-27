
import styles from "../../styles/Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>


      <div className={styles.footer__redes}>
        {/*     <h3>     Grediana Rojas </h3>*/}
        <div className={styles.redesContainer}>
          <a
            href='https://www.linkedin.com/in/grediana-rojas/'
            target="_blank"
            rel={"noreferrer"}><i className="fa-brands fa-linkedin"></i></a>
          <a href='https://github.com/grGrimales/'
            target="_blank"
            rel={"noreferrer"}><i className="fa-brands fa-github"></i></a>
        </div>
      </div>

    </footer>
  );
};
