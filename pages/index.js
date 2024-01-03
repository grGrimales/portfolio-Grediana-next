import { Layout } from "../components/layout/Layout";
import { Hero } from "../components/ui/Hero";
import { AboutMe } from "../components/section/AboutMe";
import { Skills } from "../components/section/Skills";
import { Formation } from "../components/section/Formation";
import { Services } from "../components/section/Services";
import { Projects } from "../components/section/projects/Projects";
import { Contact } from "../components/section/Contact";
import ScrollToTop from "../components/ui/ScrollToTop";
import { Experiences } from "../components/section/Experiences";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Home() {


  return (
    <Layout title="Gediana Rojas " description="Frontend Developer">
      <ScrollToTop />

      {/* Hero */}
      <section id="hero" className="section">
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
      {/* Experiences */}
      <Experiences />

      {/* Contact */}
      <Contact />
    </Layout>
  );
}
