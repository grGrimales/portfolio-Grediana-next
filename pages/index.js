import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { Layout } from "../components/layout/Layout";
import { Hero } from "../components/ui/Hero";

export default function Home() {
  return (
    <Layout title="Gediana Rojas " description="Frontend Developer">
      {/* Hero */}
      <section className={styles.section}>
        <Hero />
      </section>

      {/* About me */}

      <section className={`${styles.section} ${styles.aboutMe}`}>

        <h2>About Me</h2>

        <div className={`${styles.container} ${styles.aboutMe__container}`}>

          <div className={styles.aboutMe__description}>

            <p>

              Front- End Developer Enfocada en el desarrollo y maquetación de
              aplicaciones web donde se garantiza una buena experiencia de
              usuario. Te invito a conocer mas sobre mi trabajo
            </p>

            <div className={styles.containerBtn}>
              <button type="button" className={styles.containerBtn__cv}>
                Dowload Cv
              </button>
              <button type="button" className={styles.containerBtn__projects}>
                Proyectos
              </button>
            </div>

          </div>
          <div className={styles.aboutMe__image}>
            <Image
              src={"/images/aboutMe2.png"}
              width="240"
              height={290}
              alt="Grediana"
            />
          </div>

        </div>


      </section>

      {/* Skills */}

      <section className={`${styles.section} ${styles.skills}`}>
        <h2>Herramientas</h2>
        <div className={styles.container}>
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

      {/* Formation */}

      <section className={`${styles.section} ${styles.formation}`}>
        <h2>Estudios</h2>
        <div className={`${styles.container} ${styles.formation__container}`}>
          <div className={styles.formation__all}>
            <div className={styles.formation__content}>
              <div className={styles.formation__data}>
                <div>
                  <h3 className={styles.formation__name}>Frontend Developer</h3>
                  <span className={styles.formation__academy}>CoderHouse</span>
                  <div className={styles.formation__date}>
                    <p>2021 - 2022</p>
                  </div>
                </div>
                <div>
                  <span className={styles.formation__circle}></span>
                  <span className={styles.formation__line}></span>

                </div>
              </div>

              <div className={styles.formation__data}>
                <div></div>
                <div>
                  <span className={styles.formation__circle}></span>
                  <span className={styles.formation__line}></span>

                </div>
                <div>
                  <h3 className={styles.formation__name}>Next.js</h3>
                  <span className={styles.formation__academy}>Udemy</span>
                  <div className={styles.formation__date}>
                    <p> 2022</p>
                  </div>
                </div>
               
              </div>

              <div className={styles.formation__data}>
                <div>
                  <h3 className={styles.formation__name}>Next.js</h3>
                  <span className={styles.formation__academy}>Udemy</span>
                  <div className={styles.formation__date}>
                    <p> 2022</p>
                  </div>
                </div>
                <div>
                  <span className={styles.formation__circle}></span>
                  <span className={styles.formation__line}></span>

                </div>
              </div>

              <div className={styles.formation__data}>
                <div></div>
                <div>
                  <span className={styles.formation__circle}></span>
                  <span className={styles.formation__line}></span>

                </div>
                <div>
                  <h3 className={styles.formation__name}>Next.js</h3>
                  <span className={styles.formation__academy}>Udemy</span>
                  <div className={styles.formation__date}>
                    <p> 2022</p>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
