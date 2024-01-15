import { useState, useEffect } from "react";
import { initialData } from "../../../database/seedData";
import { useProjects } from "../../../hooks/useProjects";

import styles from '../../../styles/Projects.module.scss';
import { FullScreenLoading } from "../../ui/FullScreenLoading";
import { ProjectList } from "./ProjectList";
import { useTranslation } from "next-i18next";
//import seedData from '../../../database'
export const Projects = () => {
  const { t } = useTranslation("common");

   const projectsList = [
        {

            images: [
                "https://res.cloudinary.com/dcxto1nnl/image/upload/v1664038255/Dise%C3%B1o_sin_t%C3%ADtulo_2_rypl7f.png",
                "https://res.cloudinary.com/dcxto1nnl/image/upload/v1664038964/Dise%C3%B1o_sin_t%C3%ADtulo_3_l1nfiy.png"
            ],
            title:  t("projectLearnTitle"),
            category: 'diseño',
            description: t("projectLearnDescription"),
            technologies: ['Figma', 'HTML5', 'SASS',],
            linkDemo: "https://grgrimales.github.io/app-learning-english/",
            linkGithub: "https://github.com/grGrimales/app-learning-english",

        },
        {

          images: [
              "https://res.cloudinary.com/dcxto1nnl/image/upload/v1705279482/imagenes-paginas/gaming_tv8qd7.png",
              "https://res.cloudinary.com/dcxto1nnl/image/upload/v1705280050/imagenes-paginas/gaming_h7ggoe.png"
          ],
          title:  t("projectGamingTitle"),
          category: 'next',
          description: t("projectGamingDescription"),
          technologies: ['Next.js', 'HTML5', 'SASS', 'Semantic UI'],
          linkDemo: "https://ecommerce-gamig.vercel.app/",
          linkGithub: "https://github.com/grGrimales/ecommerce-gamig",

      },
        // {

        //     images: [
        //         "https://res.cloudinary.com/dcxto1nnl/image/upload/v1665526797/tesloShop_2_karwx1.png",
        //         "https://res.cloudinary.com/dcxto1nnl/image/upload/v1665525522/tesloShop_1_bhpouz.png"
        //     ],
        //     title: t("projectTesloTitle"),
        //     category: 'next',
        //     description: t("projectTesloDescription"),
        //     technologies:['Next.js', 'CSS'],
        //     linkDemo: "https://teslo-shop-grediana.herokuapp.com/",
        //     linkGithub: "https://github.com/grGrimales/teslo-shop",

        // },
        {

            images: [
                "https://res.cloudinary.com/dcxto1nnl/image/upload/v1664052534/decomood_qmor50.png",
                "https://res.cloudinary.com/dcxto1nnl/image/upload/v1664055695/decomood_2_rdhawd.png"
            ],
            title: t("projectDecomoodTitle"),
            category: 'next',

            technologies: ['SASS', 'Next.js', 'Figma'],
            description: t("projectDecomoodDescription"),
            linkDemo: "https://decomood.com.ar/",
            linkGithub: "https://github.com/decomoodok/decomood.git",

        },
        {

            images: [
                "https://res.cloudinary.com/dcxto1nnl/image/upload/v1664053396/altoSellos_pxeijj.png",
                "https://res.cloudinary.com/dcxto1nnl/image/upload/v1664069920/altoSellos2_banpx3.png"
            ],
            title: t("projectAltosSellosTitle"),
            category: 'next',
            description:  t("projectAltosSellosDescription"),
            technologies: ['SASS', 'Next.js', 'Figma'],

            linkDemo: "https://altosellos.com.ar/",
            linkGithub: "https://github.com/grGrimales/alto-sellos-next",

        },
        {

            images: [
                "https://res.cloudinary.com/dcxto1nnl/image/upload/v1664070257/altamiranda_eobwpr.png",
                "https://res.cloudinary.com/dcxto1nnl/image/upload/v1664070998/altamiranda2_2_hkj49g.png"
            ],
            title: t("projectAltamirandaTitle"),
            category: 'diseño',

            description: t("projectAltamirandaDescription"),
            technologies: ['CSS', 'HTML5', 'Figma', 'JavaScript'],

            linkDemo: "https://grgrimales.github.io/altamiranda-martinez/index.html",
            linkGithub: "https://github.com/grGrimales/altamiranda-martinez",

        },
        {

            images: [
                "https://res.cloudinary.com/dcxto1nnl/image/upload/v1664071235/calendar_dtzno4.png",
                "https://res.cloudinary.com/dcxto1nnl/image/upload/v1664071653/calendar2_jmh8ao.png"
            ],
            title: t("projectCalendarTitle"),
            category: 'react',

            description: t("projectCalendarDescription"),
            technologies: ['React', 'CSS', 'Node.js'],

            linkDemo: "https://grgrimales.github.io/calendar-app/#/login",
            linkGithub: "https://github.com/grGrimales/calendar-app",

        },

        {

            images: [
                "https://res.cloudinary.com/dcxto1nnl/image/upload/v1664071864/journal_b1pqph.png",
                "https://res.cloudinary.com/dcxto1nnl/image/upload/v1664071994/journal2_cx3oi4.png"
            ],
            title: t("projectJournalTitle"),
            category: 'react',

            description:  t("projectJournalDescription"),
            technologies: ['React', 'SASS', 'Firebase'],

            linkDemo: "https://grgrimales.github.io/journal-app/#/auth/login",
            linkGithub: "https://github.com/grGrimales/journal-app",

        },

        {

            images: [
                "https://res.cloudinary.com/dcxto1nnl/image/upload/v1664072738/tiempoLibro_pfvjuu.png",
                "https://res.cloudinary.com/dcxto1nnl/image/upload/v1664208593/tiempoLibro2_jwn2dg.png"
            ],
            title: t("projectTiempoLibroTitle"),
            category: 'react',

            description: t("projectTiempoLibroDescription"),
            technologies: ['React', 'SASS', 'Firebase'],

            linkDemo: "https://grgrimales.github.io/ecommerce-tiempo-libro/#/",
            linkGithub: "https://github.com/grGrimales/ecommerce-tiempo-libro",

        },


        {

            images: [
                "https://res.cloudinary.com/dcxto1nnl/image/upload/v1664209011/cafeteria_sufsgv.png",
                "https://res.cloudinary.com/dcxto1nnl/image/upload/v1664209112/cafeteria2_qx5a0x.png"
            ],
            title: t("projectCafeteriaTitle"),
            category: 'diseño',

            description:  t("projectCafeteriaDescription"),
            technologies: ['HTML5', 'SASS'],

            linkDemo: "https://grgrimales.github.io/pagina-cafeteria/",
            linkGithub: "https://github.com/grGrimales/pagina-cafeteria",

        },

        {

            images: [
                "https://res.cloudinary.com/dcxto1nnl/image/upload/v1664209528/blackjack_sw4prc.png",
                "https://res.cloudinary.com/dcxto1nnl/image/upload/v1664210383/blackjack2_drp28w.png"
            ],
            title: t("projectBlackTitle"),
            category: 'js',

            description: t("projectBlackDescription"),
            technologies: ['HTML5', 'CSS', 'JavaScript'],

            linkDemo: "https://grgrimales.github.io/Blackjack/",
            linkGithub: "https://github.com/grGrimales/Blackjack",

        },
        {

            images: [
                "https://res.cloudinary.com/dcxto1nnl/image/upload/v1664226523/pokemon_mghghk.png",
                "https://res.cloudinary.com/dcxto1nnl/image/upload/v1664226543/pokemon_1_w0pfmo.png"
            ],
            title: t("projectPokeTitle"),
            category: 'next',

            description: t("projectPokeDescription"),
            technologies: ['Next.js', 'Next UI'],

            linkDemo: "https://pokemon-next-tau.vercel.app/",
            linkGithub: "https://github.com/grGrimales/pokemon-next",

        },
        {

            images: [
                "https://res.cloudinary.com/dcxto1nnl/image/upload/v1664227290/tiendaMuebles_bxqckd.png",
                "https://res.cloudinary.com/dcxto1nnl/image/upload/v1664227102/tiendaMuebles_1_eqx4xb.png"
            ],
            title: t("projectTiendaTitle"),
            category: 'diseño',

            description: t("projectTiendaDescription"),
            technologies: ['HTML5', 'CSS'],

            linkDemo: "https://grgrimales.github.io/maquetacion-tienda-muebles/",
            linkGithub: "https://github.com/grGrimales/maquetacion-tienda-muebles",

        },
    ]

  //const { projects, isLoading } = useProjects("/project");
  const isLoading = false;
  const projects = projectsList;
  const [projectsFiltered, setProjectsFiltered] = useState();
  const [activeMenu, setActiveMenu] = useState("todos")



  const filterByProjects = (category) => {
    if (category !== "todos") {
      setActiveMenu(category)
      setProjectsFiltered(projects.filter(project => project.category === category))
      return
    }
    setActiveMenu('todos')
    setProjectsFiltered(projects)
  }

  useEffect(() => {
    if (!isLoading) setProjectsFiltered(projects);
  }, [isLoading])

  const menuItemList = [
    {
      title: "All",
      category: "todos"
    },
    {
      title: "React.js",
      category: "react"
    },
    {
      title: "Next.js",
      category: "next"
    },
    {
      title: "Design",
      category: "diseño"
    }
  ]



  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <h2>     {t("projectsTitle")}</h2>
      <div className={styles.filters}>
        <ul>
          {
            menuItemList.map((menuItem) => (

              <li key={menuItem.category} className={
                `${(activeMenu === menuItem.category) && styles.filters__active}
                 ${styles.filters__item}`}
                onClick={() => filterByProjects(menuItem.category)}>{menuItem.title}</li>

            ))

          }

        </ul>

      </div>

      {
        // isLoading ? <FullScreenLoading/> : <ProjectList projects={projectsFiltered} />
        <ProjectList projects={projectsFiltered} />
      }

    </section>
  )
}
