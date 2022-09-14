import Image from "next/image";
import styles from '../../styles/Skills.module.scss';

export const Skills = () => {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
    <h2>Herramientas</h2>
    <div className='container'>
      <div className={styles.skills__content}>

        <div className={styles.skills__data}>
          <div className={styles.skills__image}>
            <Image width={50} height={50} src='/images/figma.png' alt="Logo" />
          </div>
          <div className={styles.skills__description}>
            <div className={styles.skills__title}>
              <h3>Figma</h3>
              <span>85%</span>
            </div>

            <div className={styles.skills__bar}>
              <span className={`${styles.skills__percent} ${styles.skills__figma}`}></span>
            </div>
          </div>
        </div>

        <div className={styles.skills__data}>
          <div className={styles.skills__image}>
            <Image width={50} height={50} src='/images/canva.png' alt="Logo" />
          </div>
          <div className={styles.skills__description}>
            <div className={styles.skills__title}>
              <h3>Canva</h3>
              <span>80%</span>
            </div>

            <div className={styles.skills__bar}>
              <span className={`${styles.skills__percent} ${styles.skills__canva}`}></span>
            </div>
          </div>
        </div>


        <div className={styles.skills__data}>
          <div className={styles.skills__image}>
            <Image width={50} height={50} src='/images/html5.png' alt="Logp" />
          </div>
          <div className={styles.skills__description}>
            <div className={styles.skills__title}>
              <h3>HTML5</h3>
              <span>90%</span>
            </div>

            <div className={styles.skills__bar}>
              <span className={`${styles.skills__percent} ${styles.skills__html}`}></span>
            </div>
          </div>
        </div>


        <div className={styles.skills__data}>
          <div className={styles.skills__image}>
            <Image width={50} height={50} src='/images/css3.png' alt="Logo" />
          </div>
          <div className={styles.skills__description}>
            <div className={styles.skills__title}>
              <h3>CSS3</h3>
              <span>85%</span>
            </div>

            <div className={styles.skills__bar}>
              <span className={`${styles.skills__percent} ${styles.skills__css}`}></span>
            </div>
          </div>
        </div>

        <div className={styles.skills__data}>
          <div className={styles.skills__image}>
            <Image width={50} height={50} src='/images/sass.png' alt="Logo" />
          </div>
          <div className={styles.skills__description}>
            <div className={styles.skills__title}>
              <h3>SASS</h3>
              <span>85%</span>
            </div>

            <div className={styles.skills__bar}>
              <span className={`${styles.skills__percent} ${styles.skills__sass}`}></span>
            </div>
          </div>
        </div>

        <div className={styles.skills__data}>
          <div className={styles.skills__image}>
            <Image width={50} height={50} src='/images/bootstrap.png' alt="Logo" />
          </div>
          <div className={styles.skills__description}>
            <div className={styles.skills__title}>
              <h3>Bootstrap</h3>
              <span>75%</span>
            </div>

            <div className={styles.skills__bar}>
              <span className={`${styles.skills__percent} ${styles.skills__bootstrap}`}></span>
            </div>
          </div>
        </div>

        <div className={styles.skills__data}>
          <div className={styles.skills__image}>
            <Image width={50} height={50} src='/images/js.png' alt="Logo" />
          </div>
          <div className={styles.skills__description}>
            <div className={styles.skills__title}>
              <h3>JavaScript</h3>
              <span>85%</span>
            </div>

            <div className={styles.skills__bar}>
              <span className={`${styles.skills__percent} ${styles.skills__js}`}></span>
            </div>
          </div>
        </div>

        <div className={styles.skills__data}>
          <div className={styles.skills__image}>
            <Image width={50} height={50} src='/images/react.png' alt="Logo" />
          </div>
          <div className={styles.skills__description}>
            <div className={styles.skills__title}>
              <h3>React</h3>
              <span>85%</span>
            </div>

            <div className={styles.skills__bar}>
              <span className={`${styles.skills__percent} ${styles.skills__react}`}></span>
            </div>
          </div>
        </div>

        <div className={styles.skills__data}>
          <div className={styles.skills__image}>
            <Image width={50} height={50} src='/images/firebase.png' alt="Logo" />
          </div>
          <div className={styles.skills__description}>
            <div className={styles.skills__title}>
              <h3>Firebase</h3>
              <span>80%</span>
            </div>

            <div className={styles.skills__bar}>
              <span className={`${styles.skills__percent} ${styles.skills__firebase}`}></span>
            </div>
          </div>
        </div>

        <div className={styles.skills__data}>
          <div className={styles.skills__image}>
            <Image width={50} height={50} src='/images/git.png' alt="Logo" />
          </div>
          <div className={styles.skills__description}>
            <div className={styles.skills__title}>
              <h3>Git</h3>
              <span>80%</span>
            </div>

            <div className={styles.skills__bar}>
              <span className={`${styles.skills__percent} ${styles.skills__git}`}></span>
            </div>
          </div>
        </div>

        <div className={styles.skills__data}>
          <div className={styles.skills__image}>
            <Image width={50} height={50} src='/images/github.png' alt="Logo" />
          </div>
          <div className={styles.skills__description}>
            <div className={styles.skills__title}>
              <h3>Github</h3>
              <span>80%</span>
            </div>

            <div className={styles.skills__bar}>
              <span className={`${styles.skills__percent} ${styles.skills__github}`}></span>
            </div>
          </div>
        </div>






      </div>
    </div>


  </section>
  )
}
