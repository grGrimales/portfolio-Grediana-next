import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";


import styles from '../../styles/AboutMe.module.scss'

export const AboutMe = () => {
  const { t } = useTranslation("common");

  return (

    <section id="aboutMe" className={`section ${styles.aboutMe}`}>

      <h2>About Me</h2>

      <div className={`container ${styles.aboutMe__container}`}>

        <div className={styles.aboutMe__description}>

          <p>

          {t("aboutMeDescription")}

          </p>

          <div className={styles.containerBtn}>
            <button type="button" className={styles.containerBtn__cv}>

              <a href='/CVGredianaRojasGrimales.pdf' target="_blank" rel="noopener noreferrer" download="CV-Grediana.pdf"> Dowload Cv</a>

            </button>

            <Link href='/#projects'>
              <button type="button" className={styles.containerBtn__projects}>
                {t("aboutMeBtnProjects")}
              </button>
            </Link>
          </div>

        </div>
        {/* <div className={styles.aboutMe__image}>
          <Image
            src={"https://res.cloudinary.com/dcxto1nnl/image/upload/v1665521781/header13_lrpkij.png"}
            width="250"
            height={400}
            alt="Grediana"
          />
        </div> */}

      </div>


    </section>
  )
}
