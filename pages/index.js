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
        <div className={styles.aboutMe__image}>
          <Image
            src={"/images/gre.jpg"}
            width="250"
            height={250}
            alt="Grediana"
          />
        </div>
        <div className={styles.aboutMe__description}>
          <h2>About Me</h2>

          <p>
            {" "}
            Front- End Developer Enfocada en el desarrollo y maquetación de
            aplicaciones web donde se garantiza una buena experiencia de
            usuario. Te invito a conocer mas sobre mi trabajo
          </p>
        </div>
      </section>
    </Layout>
  );
}
