import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/Hero.module.scss";

export const Hero = () => {
  return (
    <>
      <div className={styles.hero} id='hero'>
        <div className={styles.description}>
          <div className={styles.description__text}>
            <span>¡Hola!</span>

            

            <h1>Soy Grediana</h1>
            <p> FrontEnd Developer -  FrontEnd Design</p>
            <Link href='/#contact'>
            <button type="button" className={styles["cover__btn"]}>
              Contáctame
            </button>
            
            </Link>
         
          </div>

          <div className={styles.containerImg}>
            <Image width={351} height={492} src={"/images/header13.png"} alt=' Imagen de Grediana' />
          </div>
        </div>
      </div>
    </>
  );
};
