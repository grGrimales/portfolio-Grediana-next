import { useTranslation } from 'next-i18next';
import styles from '../../styles/Services.module.scss';

export const Services = () => {
  const { t } = useTranslation("common");

  return (
    <section id="services" className={`section ${styles.services}`}>
      <h2>{t("servicesTitle")}</h2>

      <div className='container'>
        <div className={styles.services__content}>
          <div className={styles.services__data}>
            <span><i className="fa-solid fa-laptop-code"></i>
            </span>

            <h3>{t("servicesSubtitle")}</h3>
            <p>
            {t("servicesDescription")}
            </p>

          </div>

          <div className={styles.services__data}>
            <span><i className="fa-solid fa-tablet-screen-button"></i></span>


            <h3> {t("servicesSubtitleTwo")}</h3>
            <p>
            {t("servicesDescriptionTwo")}
            </p>

          </div>
        </div>


      </div>
    </section>
  )
}
