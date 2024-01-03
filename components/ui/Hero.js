import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/Hero.module.scss";
import { useTranslation } from "next-i18next";

export const Hero = () => {
  const { t } = useTranslation("common");

  
  return (
    <>
      <div className={styles.hero} id="hero">
        <div className={styles.description}>
          <div className={styles.description__text}>

     
            <span>¡{t("greeting")}!</span>
            <h1> {t("welcome")}</h1>
            <p> {t("description")} </p>

            <Link href="/#contact">
              <button type="button" className={styles["cover__btn"]}>
              {t("heroContact")}
              </button>
            </Link>
          </div>

          <div className={styles.containerImg}>
            <Image
              width={351}
              height={492}
              src={"/images/header13.png"}
              alt="Grediana"
            />
          </div>
        </div>
      </div>
    </>
  );
};
