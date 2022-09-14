import styles from "../../styles/Formation.module.scss";

export const Formation = () => {
  return (
    <section id="formation" className={`section ${styles.formation}`}>
    <h2>Estudios</h2>
    <div className={`container ${styles.formation__container}`}>
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

  )
}
