import Image from "next/image";

import styles from '../../styles/Projects.module.scss';

export const Projects = () => {
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
        <div className={`container ${styles.projects__list} `}>
          <div className={styles.projectItem}>
            <Image src={'/images/gre.jpg'} alt='image' width={250} height={200} />
            <div className={styles.projectItem__description}>
              <h3>Title Project</h3>
              <span>  <i className="fa-solid fa-circle-info"></i></span>

            </div>
            <div className={styles.projectItem__links}>
              <a href="#" >Demo <i className="fa-solid fa-angles-right"></i> </a>
              <a href="#" >Github <i className="fa-solid fa-angles-right"></i> </a>

            </div>
          </div>

          <div className={styles.projectItem}>
            <Image src={'/images/gre.jpg'} alt='image' width={250} height={200} />
            <div className={styles.projectItem__description}>
              <h3>Title Project</h3>
              <span>  <i className="fa-solid fa-circle-info"></i></span>

            </div>
            <div className={styles.projectItem__links}>
              <a href="#" >Demo <i className="fa-solid fa-angles-right"></i> </a>
              <a href="#" >Github <i className="fa-solid fa-angles-right"></i> </a>

            </div>
          </div>   <div className={styles.projectItem}>
            <Image src={'/images/gre.jpg'} alt='image' width={250} height={200} />
            <div className={styles.projectItem__description}>
              <h3>Title Project</h3>
              <span>  <i className="fa-solid fa-circle-info"></i></span>

            </div>
            <div className={styles.projectItem__links}>
              <a href="#" >Demo <i className="fa-solid fa-angles-right"></i> </a>
              <a href="#" >Github <i className="fa-solid fa-angles-right"></i> </a>

            </div>
          </div>   <div className={styles.projectItem}>
            <Image src={'/images/gre.jpg'} alt='image' width={250} height={200} />
            <div className={styles.projectItem__description}>
              <h3>Title Project</h3>
              <span>  <i className="fa-solid fa-circle-info"></i></span>

            </div>
            <div className={styles.projectItem__links}>
              <a href="#" >Demo <i className="fa-solid fa-angles-right"></i> </a>
              <a href="#" >Github <i className="fa-solid fa-angles-right"></i> </a>

            </div>
          </div>   <div className={styles.projectItem}>
            <Image src={'/images/gre.jpg'} alt='image' width={250} height={200} />
            <div className={styles.projectItem__description}>
              <h3>Title Project</h3>
              <span>  <i className="fa-solid fa-circle-info"></i></span>

            </div>
            <div className={styles.projectItem__links}>
              <a href="#" >Demo <i className="fa-solid fa-angles-right"></i> </a>
              <a href="#" >Github <i className="fa-solid fa-angles-right"></i> </a>

            </div>
          </div>   <div className={styles.projectItem}>
            <Image src={'/images/gre.jpg'} alt='image' width={250} height={200} />
            <div className={styles.projectItem__description}>
              <h3>Title Project</h3>
              <span>  <i className="fa-solid fa-circle-info"></i></span>

            </div>
            <div className={styles.projectItem__links}>
              <a href="#" >Demo <i className="fa-solid fa-angles-right"></i> </a>
              <a href="#" >Github <i className="fa-solid fa-angles-right"></i> </a>

            </div>
          </div>

        </div>
      </section>
  )
}
