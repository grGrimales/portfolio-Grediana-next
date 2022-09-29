import Image from "next/image";
import Link from "next/link";


import styles from '../../styles/AboutMe.module.scss'

export const AboutMe = () => {
  return (
   
    <section id="aboutMe" className={`section ${styles.aboutMe}`}>

    <h2>About Me</h2>

    <div className={`container ${styles.aboutMe__container}`}>

      <div className={styles.aboutMe__description}>

        <p>

        Developer    FrontEnd enfocada en el desarrollo y maquetación de
          aplicaciones web donde se garantiza una buena experiencia de
          usuario. Te invito a conocer más sobre mi trabajo
        </p>

        <div className={styles.containerBtn}>
          <button type="button" className={styles.containerBtn__cv}>

            <a href='/CVGredianaRojasGrimales.pdf' target="_blank" rel="noopener noreferrer" download="CV-Grediana.pdf">      Dowload Cv</a>
       
          </button>

          <Link href='/#projects'>
          <button type="button" className={styles.containerBtn__projects}>
            Proyectos
          </button>
          </Link>
        </div>

      </div>
      <div className={styles.aboutMe__image}>
        <Image
          src={"/images/aboutMe4.png"}
          width="250"
          height={400}
          alt="Grediana"
        />
      </div>

    </div>


  </section>
  )
}
