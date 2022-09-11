import Image from "next/image";

import styles from "../../styles/Hero.module.scss";

export const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.description}>
          <div className={styles.description__text}>
            <span>Hola</span>

            <h1>Soy Grediana</h1>
            <p>Developer FrontEnd - Design FrontEnd</p>
            <button type="button" className={styles["cover__btn"]}>
              Contáctame
            </button>
          </div>

          <div className={styles.containerImg}>
            <Image width={351} height={492} src={"/images/header13.png"} />
          </div>
        </div>
      </div>
    </>
  );
};
