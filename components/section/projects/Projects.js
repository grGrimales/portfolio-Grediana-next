import Image from "next/image";
import { useProjects } from "../../../hooks/useProjects";

import styles from '../../../styles/Projects.module.scss';
import { Project } from "./Project";

export const Projects = () => {


  const { projects, isLoading } = useProjects("/project");


 
  return (
    <section id="projects" className={`section ${styles.projects}`}>
        <h2>Últimos Trabajos</h2>
        <div className={styles.filters}>
          <ul>
            <li className={`${styles.filters__active} ${styles.filters__item}`}>Todos</li>
            <li className={styles.filters__item}>React.js</li>
            <li className={styles.filters__item}>Next.js</li>
            <li className={styles.filters__item}>Diseño</li>


          </ul>


        </div>


{
  isLoading ? <h3>Cargando</h3> :  <Project resp={projects}/>
}
       

      </section>
  )
}
