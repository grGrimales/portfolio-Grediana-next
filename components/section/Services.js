import styles from '../../styles/Services.module.scss';

export const Services = () => {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <h2>Servicios</h2>

      <div className='container'>
        <div className={styles.services__content}>
          <div className={styles.services__data}>
            <span><i className="fa-solid fa-laptop-code"></i>
            </span>

            <h3>Desarrollo de aplicaciones web  </h3>
            <p>
              Creación de interfaces gráficas y uso de diversas tecnologías con el fín de
               lograr los diferentes componentes visuales para un sitio o aplicación web.
               </p>

          </div>

          <div className={styles.services__data}>
            <span><i className="fa-solid fa-tablet-screen-button"></i></span>


            <h3> Diseño de aplicaciones web</h3>
            <p>Sitios web receptivos creados para una experiencia de usuario óptima.
              Al mismo tiempo garantice la facilidad de uso y su simplicidad.
            </p>

          </div>
        </div>


      </div>
    </section>
  )
}
