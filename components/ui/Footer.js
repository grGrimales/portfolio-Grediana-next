
import styles from "../../styles/Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>


      <div className={styles.footer__redes}>
        <div className={styles.redesContainer}>
          <a
            href='https://www.linkedin.com/in/grediana-rojas/'
            target="_blank"
            rel={"noreferrer"}><i className="fa-brands fa-linkedin"></i></a>
          <a
            href='https://api.whatsapp.com/send?phone=+51923929618&text=%C2%A1Hola!%20me%20gustar%C3%ADa%20contactar%20contigo.'
            target="_blank"
            rel={"noreferrer"}
          ><i className="fa-brands fa-whatsapp"></i></a>
          <a href='https://github.com/grGrimales/'
            target="_blank"
            rel={"noreferrer"}><i className="fa-brands fa-github"></i></a>
        </div>
      </div>

    </footer>
  );
};
