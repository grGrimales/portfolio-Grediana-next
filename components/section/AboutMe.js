import Image from "next/image";
import Link from "next/link";


import styles from '../../styles/AboutMe.module.scss'

export const AboutMe = () => {
  return (

    <section id="aboutMe" className={`section ${styles.aboutMe}`}>

      <h2>About Me</h2>

      <div className={`container ${styles.aboutMe__container}`}>

        <div className={styles.aboutMe__description}>

          {/* <p>

            Como desarrollador FrontEnd, me enfoco en el desarrollo y maquetación de aplicaciones web para garantizar una excelente experiencia de usuario. Me apasiona crear soluciones innovadoras y eficientes que satisfagan las necesidades de mis clientes.
            Si deseas conocer más sobre mi trabajo, ¡no dudes en echar un vistazo a mi portafolio!
          </p> */}
          <p>

            Como desenvolvedor FrontEnd, meu foco está no desenvolvimento e design de aplicativos da web para garantir uma excelente experiência do usuário. Eu sou apaixonado por criar soluções inovadoras e eficientes que atendam às necessidades dos meus clientes.
            Se você deseja saber mais sobre o meu trabalho, não hesite em dar uma olhada no meu portfólio!

          </p>

          <div className={styles.containerBtn}>
            <button type="button" className={styles.containerBtn__cv}>

              <a href='/CVGredianaRojasGrimales.pdf' target="_blank" rel="noopener noreferrer" download="CV-Grediana.pdf"> Dowload Cv</a>

            </button>

            <Link href='/#projects'>
              <button type="button" className={styles.containerBtn__projects}>
                Projetos
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
