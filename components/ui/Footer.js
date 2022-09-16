
import styles from "../../styles/Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>


      <div className={styles.footer__redes}>
      {/*     <h3>     Grediana Rojas </h3>*/} 
        <div className={styles.redesContainer}>
          <a href='#'><i className="fa-brands fa-linkedin"></i></a>
          <a href='#'><i className="fa-brands fa-github"></i></a>
        </div>
      </div>

    </footer>
  );
};
