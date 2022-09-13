import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { Layout } from "../components/layout/Layout";
import { Hero } from "../components/ui/Hero";

export default function Home() {
  return (
    <Layout title="Gediana Rojas " description="Frontend Developer">
      {/* Hero */}
      <section id="hero" className={styles.section}>
        <Hero />
      </section>

      {/* About me */}

      <section id="aboutMe" className={`${styles.section} ${styles.aboutMe}`}>

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
              src={"/images/aboutMe4.png"}
              width="250"
              height={400}
              alt="Grediana"
            />
          </div>

        </div>


      </section>

      {/* Skills */}

      <section id="skills" className={`${styles.section} ${styles.skills}`}>
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

      <section id="formation" className={`${styles.section} ${styles.formation}`}>
        <h2>Estudios</h2>
        <div className={`${styles.container} ${styles.formation__container}`}>
          <div className={styles.formation__all}>
            <div className={styles.formation__content}>
              <div className={styles.formation__data}>
                <div className={styles.formation__period}>
                  <p>Octubre 20021 - Abril 2022</p>
                </div>
                <div>
                  <span className={styles.formation__circle}></span>
                  <span className={styles.formation__line}></span>

                </div>
                <div className={styles.formation__description}>
                  <h3 className={styles.formation__name}>Frontend Developer</h3>
                  <span className={styles.formation__academy}>CoderHouse</span>
                  <div className={styles.formation__details}>
                    <ul>
                      <li><i className="fa-solid fa-check"></i> Desarrollo Web</li>
                      <li> <i className="fa-solid fa-check"></i> JavaScript </li>
                      <li><i className="fa-solid fa-check"></i>React </li>




                    </ul>
                  </div>
                </div>

              </div>

              <div className={styles.formation__data}>
                <div className={styles.formation__period}>
                  <p>Octubre 20021 - Abril 2022</p>
                </div>
                <div>
                  <span className={styles.formation__circle}></span>
                  <span className={styles.formation__line}></span>

                </div>
                <div className={styles.formation__description}>
                  <h3 className={styles.formation__name}>Frontend Developer</h3>
                  <span className={styles.formation__academy}>CoderHouse</span>
                  <div className={styles.formation__details}>
                    <p>2021 - 2022</p>
                  </div>
                </div>

              </div>

              <div className={styles.formation__data}>
                <div className={styles.formation__period}>
                  <p>Octubre 20021 - Abril 2022</p>
                </div>
                <div>
                  <span className={styles.formation__circle}></span>
                  <span className={styles.formation__line}></span>

                </div>
                <div className={styles.formation__description}>
                  <h3 className={styles.formation__name}>Frontend Developer</h3>
                  <span className={styles.formation__academy}>CoderHouse</span>
                  <div className={styles.formation__details}>
                    <p>2021 - 2022</p>
                  </div>
                </div>

              </div>

              <div className={styles.formation__data}>
                <div className={styles.formation__period}>
                  <p>Octubre 20021 - Abril 2022</p>
                </div>
                <div>
                  <span className={styles.formation__circle}></span>

                </div>
                <div className={styles.formation__description}>
                  <h3 className={styles.formation__name}>Frontend Developer</h3>
                  <span className={styles.formation__academy}>CoderHouse</span>
                  <div className={styles.formation__details}>
                    <p>2021 - 2022</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="formation" className={`${styles.section} ${styles.services}`}>
        <h2>Servicios</h2>

        <div className={`${styles.container} `}>
          <div className={styles.services__content}>
            <div className={styles.services__data}>
              <span><i class="fa-solid fa-laptop-code"></i>
              </span>

              <h3> Desarrollo de aplicaciones web</h3>
              <p>¡Burke, qué carga de basura, joven delincuente, matie boy, un tiro cegador, caballo, juego, cuppa, viejo, viento, bevvy!</p>

            </div>

            <div className={styles.services__data}>
              <span><i class="fa-solid fa-tablet-screen-button"></i></span>


              <h3> Diseño de aplicaciones web</h3>
              <p>¡Burke, qué carga de basura, joven delincuente, matie boy, un tiro cegador, caballo, juego, cuppa, viejo, viento, bevvy!</p>

            </div>
          </div>


        </div>
      </section>

      {/* Projects */}
      <section id="projects" className={`${styles.section} ${styles.projects}`}>
        <h2>Últimos Trabajos</h2>
        <div className={styles.filters}>
          <ul>
            <li className={`${styles.filters__active} ${styles.filters__item}`}>Todos</li>
            <li className={styles.filters__item}>React.js</li>
            <li className={styles.filters__item}>Next.js</li>
            <li className={styles.filters__item}>Diseño</li>
          
          
          </ul>
       

        </div>
        <div className={`${styles.container} ${styles.projects__list} `}>
          <div className={styles.projectItem}>
            <Image src={'/images/gre.jpg'} alt='image' width={250} height={200} />
            <div className={styles.projectItem__description}>
              <h3>Title Project</h3>
              <span>  <i class="fa-solid fa-circle-info"></i></span>

            </div>
            <div className={styles.projectItem__links}>
              <a href="#" >Demo <i class="fa-solid fa-angles-right"></i> </a>
              <a href="#" >Github <i class="fa-solid fa-angles-right"></i> </a>

            </div>
          </div>

          <div className={styles.projectItem}>
            <Image src={'/images/gre.jpg'} alt='image' width={250} height={200} />
            <div className={styles.projectItem__description}>
              <h3>Title Project</h3>
              <span>  <i class="fa-solid fa-circle-info"></i></span>

            </div>
            <div className={styles.projectItem__links}>
              <a href="#" >Demo <i class="fa-solid fa-angles-right"></i> </a>
              <a href="#" >Github <i class="fa-solid fa-angles-right"></i> </a>

            </div>
          </div>   <div className={styles.projectItem}>
            <Image src={'/images/gre.jpg'} alt='image' width={250} height={200} />
            <div className={styles.projectItem__description}>
              <h3>Title Project</h3>
              <span>  <i class="fa-solid fa-circle-info"></i></span>

            </div>
            <div className={styles.projectItem__links}>
              <a href="#" >Demo <i class="fa-solid fa-angles-right"></i> </a>
              <a href="#" >Github <i class="fa-solid fa-angles-right"></i> </a>

            </div>
          </div>   <div className={styles.projectItem}>
            <Image src={'/images/gre.jpg'} alt='image' width={250} height={200} />
            <div className={styles.projectItem__description}>
              <h3>Title Project</h3>
              <span>  <i class="fa-solid fa-circle-info"></i></span>

            </div>
            <div className={styles.projectItem__links}>
              <a href="#" >Demo <i class="fa-solid fa-angles-right"></i> </a>
              <a href="#" >Github <i class="fa-solid fa-angles-right"></i> </a>

            </div>
          </div>   <div className={styles.projectItem}>
            <Image src={'/images/gre.jpg'} alt='image' width={250} height={200} />
            <div className={styles.projectItem__description}>
              <h3>Title Project</h3>
              <span>  <i class="fa-solid fa-circle-info"></i></span>

            </div>
            <div className={styles.projectItem__links}>
              <a href="#" >Demo <i class="fa-solid fa-angles-right"></i> </a>
              <a href="#" >Github <i class="fa-solid fa-angles-right"></i> </a>

            </div>
          </div>   <div className={styles.projectItem}>
            <Image src={'/images/gre.jpg'} alt='image' width={250} height={200} />
            <div className={styles.projectItem__description}>
              <h3>Title Project</h3>
              <span>  <i class="fa-solid fa-circle-info"></i></span>

            </div>
            <div className={styles.projectItem__links}>
              <a href="#" >Demo <i class="fa-solid fa-angles-right"></i> </a>
              <a href="#" >Github <i class="fa-solid fa-angles-right"></i> </a>

            </div>
          </div>

        </div>
      </section>


      {/* Contact */}

    </Layout>
  );
}
