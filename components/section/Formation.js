import { useTranslation } from "next-i18next";
import styles from "../../styles/Formation.module.scss";

export const Formation = () => {
  const { t } = useTranslation("common");

  return (
    <section id="formation" className={`section ${styles.formation}`}>
      <h2>{t("formationTitle")}</h2>
      <div className={`container ${styles.formation__container}`}>
        <div className={styles.formation__all}>
          <div className={styles.formation__content}>
            <div className={styles.formation__data}>
              <div className={styles.formation__period}>
                <p>{t("formationMonthsOne")}</p>
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
                    <li><i className="fa-regular fa-circle-check"></i> Desarrollo Web</li>
                    <li> <i className="fa-regular fa-circle-check"></i> JavaScript </li>
                    <li><i className="fa-regular fa-circle-check"></i> React </li>




                  </ul>
                </div>
              </div>

            </div>

            <div className={styles.formation__data}>
              <div className={styles.formation__period}>
                <p>{t("formationMonthsTwo")}</p>
              </div>
              <div>
                <span className={styles.formation__circle}></span>
                <span className={styles.formation__line}></span>

              </div>
              <div className={styles.formation__description}>
                <h3 className={styles.formation__name}>React: De cero a experto. </h3>
                <span className={styles.formation__academy}>Udemy</span>
                <div className={styles.formation__details}>
                  <ul>
                    <li><i className="fa-regular fa-circle-check"></i> Hooks</li>
                    <li> <i className="fa-regular fa-circle-check"></i> Mern </li>
                    <li><i className="fa-regular fa-circle-check"></i> React Redux</li>




                  </ul>
                </div>
              </div>

            </div>

            <div className={styles.formation__data}>
              <div className={styles.formation__period}>
                <p>{t("formationMonthsThree")}</p>
              </div>
              <div>
                <span className={styles.formation__circle}></span>
                <span className={styles.formation__line}></span>

              </div>
              <div className={styles.formation__description}>
                <h3 className={styles.formation__name}>Next.js</h3>
                <span className={styles.formation__academy}>Udemy</span>
                <div className={styles.formation__details}>
                  <ul>
                    <li><i className="fa-regular fa-circle-check"></i> SSP</li>
                    <li> <i className="fa-regular fa-circle-check"></i> SWR </li>
                    <li><i className="fa-regular fa-circle-check"></i> ISR</li>




                  </ul>
                </div>

              </div>

            </div>

            <div className={styles.formation__data}>
              <div className={styles.formation__period}>
                <p>{t("formationMonthsFour")}</p>
              </div>
              <div>
                <span className={styles.formation__circle}></span>

              </div>
              <div className={styles.formation__description}>
                <h3 className={styles.formation__name}>Master en CSS</h3>
                <span className={styles.formation__academy}>Udemy</span>
                <div className={styles.formation__details}>
                  <ul>
                    <li><i className="fa-regular fa-circle-check"></i> Responsive Design</li>
                    <li> <i className="fa-regular fa-circle-check"></i> SASS </li>
                    <li><i className="fa-regular fa-circle-check"></i> Flexbox</li>




                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
