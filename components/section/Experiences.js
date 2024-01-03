import { useTranslation } from "next-i18next";
import styles from "../../styles/Experiences.module.scss";

export const Experiences = () => {

  const { t } = useTranslation("common");

  const experiences = [
    {
      date: t("experience1_date"),
      title: t("experience1_title"),
      detail: t("experience1_detail"),
    },
    {
      date: t("experience2_date"),
      title: t("experience2_title"),
      detail: t("experience2_detail"),
    },
    {
      date: t("experience3_date"),
      title: t("experience3_title"),
      detail: t("experience3_detail"),
    },
  ];
  return (
    <section id="experiences" className={`section ${styles.experiences}`}>
      <h2> {t("experiencesTitle")}</h2>

      <div className="container">
        <div className={styles.experiences__content}>
          {experiences.map((experience, index) => (
            <div className={styles.experiences__data} key={index}>
              <p className={styles.experiences__date}>{experience.date}</p>
              <h3 className={styles.experiences__title}>{experience.title}</h3>
              <p className={styles.experiences__detail}>{experience.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
