import styles from "../styles/Home.module.scss";
import { Layout } from "../components/layout/Layout";
import { Hero } from "../components/ui/Hero";
import { AboutMe } from "../components/section/AboutMe";
import { Skills } from "../components/section/Skills";
import { Formation } from "../components/section/Formation";
import { Services } from "../components/section/Services";
import { Projects } from "../components/section/Projects";
import { Contact } from "../components/section/Contact";

export default function Home() {


  return (
    <Layout title="Gediana Rojas " description="Frontend Developer">
      {/* Hero */}
      <section id="hero" className='section'>
        <Hero />
      </section>

      {/* About me */}
      <AboutMe />

      {/* Skills */}

      <Skills />

      {/* Formation */}
      <Formation />

      {/* Services */}
      <Services />

      {/* Projects */}

      <Projects />

      {/* Contact */}
      <Contact />
    </Layout>
  );
}
