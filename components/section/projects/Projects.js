import { useState, useEffect } from "react";
import { initialData } from "../../../database/seedData";
import { useProjects } from "../../../hooks/useProjects";

import styles from '../../../styles/Projects.module.scss';
import { FullScreenLoading } from "../../ui/FullScreenLoading";
import { ProjectList } from "./ProjectList";
//import seedData from '../../../database'
export const Projects = () => {

  //const { projects, isLoading } = useProjects("/project");
  const isLoading = false;
  const projects = initialData.projects;
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
      title: "Todos",
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
      title: "Diseño",
      category: "diseño"
    }
  ]



  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <h2>Últimos Trabajos</h2>
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
