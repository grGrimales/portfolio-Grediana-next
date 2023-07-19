import styles from '../../styles/Services.module.scss';

export const Services = () => {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <h2>Serviços</h2>

      <div className='container'>
        <div className={styles.services__content}>
          <div className={styles.services__data}>
            <span><i className="fa-solid fa-laptop-code"></i>
            </span>

            <h3>Desenvolvimento de aplicações Web </h3>.
            <p>
              Criação de interfaces gráficas e utilização de várias tecnologias para obter os diferentes
              alcançar os diferentes componentes visuais para um sítio web ou uma aplicação web.
            </p>

          </div>

          <div className={styles.services__data}>
            <span><i className="fa-solid fa-tablet-screen-button"></i></span>


            <h3> Design de aplicações web</h3>
            <p>Sites responsivos criados para uma óptima experiência do utilizador.
              Ao mesmo tempo, garantindo facilidade de uso e simplicidade.
            </p>

          </div>
        </div>


      </div>
    </section>
  )
}
