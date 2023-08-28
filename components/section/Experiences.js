import styles from "../../styles/Experiences.module.scss";

export const Experiences = () => {
  const experiences = [
    {
      date: "Octubre 2022 - Actualmente",
      title: "Desenvolvedor Frontend",
      detail:
        "No meu papel na Holinsys, especializei-me na gestão e desenvolvimento de aplicações web usando frameworks avançados como Angular e React. Aqui está um resumo das minhas responsabilidades e principais conquistas: *Liderança em Tecnologia, *Versatilidade em Desenvolvimento Front-End, *Foco em Reusabilidade e Design Responsivo *Colaboração Interdisciplinar, *Gestão de Código e Versionamento, *Implantação e Operações, *Comunicação e Planejamento ",
    },
    {
      date: "Agosto 2021 - Septiembre 2022",
      title: "Freelance Desenvolvedor Frontend",
      detail:
        "Como freelancer, tive a oportunidade de trabalhar em uma série de projetos diversificados que me permitiram aplicar uma ampla gama de tecnologias e metodologias. Trabalhei na criação e manutenção de um E-commerce, implementando tanto o frontend como a integração com APIs",
    },
    {
      date: "Julio 2021 - Agosto 2021",
      title: "Freelance  Desenvolvedor Frontend",
      detail:
        "No meu período como freelancer, tive a oportunidade de trabalhar em uma variedade de projetos que me permitiram explorar diversas tecnologias e métodos de trabalho. Detalho alguns desses projetos: Learn English, Módulo de Agendamento de Eventos, Altamiranda Martinez ",
    },
  ];
  return (
    <section id="experiences" className={`section ${styles.experiences}`}>
      <h2>Experiências de trabalho </h2>

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
