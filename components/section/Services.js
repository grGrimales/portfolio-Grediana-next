import styles from '../../styles/Services.module.scss';

export const Services = () => {
  return (
    <section id="formation" className={`section ${styles.services}`}>
        <h2>Servicios</h2>

        <div className='container'>
          <div className={styles.services__content}>
            <div className={styles.services__data}>
              <span><i className="fa-solid fa-laptop-code"></i>
              </span>

              <h3> Desarrollo de aplicaciones web</h3>
              <p>¡Burke, qué carga de basura, joven delincuente, matie boy, un tiro cegador, caballo, juego, cuppa, viejo, viento, bevvy!</p>

            </div>

            <div className={styles.services__data}>
              <span><i className="fa-solid fa-tablet-screen-button"></i></span>


              <h3> Diseño de aplicaciones web</h3>
              <p>¡Burke, qué carga de basura, joven delincuente, matie boy, un tiro cegador, caballo, juego, cuppa, viejo, viento, bevvy!</p>

            </div>
          </div>


        </div>
      </section>
  )
}
