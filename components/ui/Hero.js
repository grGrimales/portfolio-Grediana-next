import Image from "next/image";

import styles from "../../styles/Hero.module.scss";

export const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.description}>
          <div className={styles.description__text}>
            <span>Hola</span>

            <h2>Soy Grediana</h2>
            <p>Developer FrontEnd - Design FrontEnd</p>
            <button type="button" className={styles["cover__btn"]}>
              Contáctame
            </button>
          </div>

          <div className={styles.containerImg}>
            <Image width={500} height={700} src={"/images/header2.png"} />
          </div>
        </div>
      </div>
    </>
  );
};
