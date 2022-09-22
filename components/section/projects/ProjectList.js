import Image from "next/image";
import { useState } from "react";
import { Modal } from '../../ui/Modal';
import styles from '../../../styles/Projects.module.scss';
import { ProjectSlideShow } from "./ProjectSlideShow";




export const ProjectList = ({ projects }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [itemToShowOnModal, setIItemToShowOnModal] = useState(null);


  const openModal = (project) => {
    setIsOpen(true);
    setIItemToShowOnModal(project)
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <>

      <ProjectSlideShow />
      <div className={`container ${styles.projects__list} `}>
        <Modal modalIsOpen={modalIsOpen} closeModal={closeModal} content={itemToShowOnModal} />

        {
          projects?.map((project) => (
            <>

              <div className={styles.projectItem} key={project._id}>

                <div className={styles.img} >
                  <ProjectSlideShow images={project.images} />
                </div>
                <div className={styles.projectItem__description}>
                  <h3>{project.title}</h3>
                  <span onClick={() => openModal(project)}>  <i className="fa-solid fa-circle-info"></i></span>



                </div>
                <div className={styles.projectItem__links}>
                  <a href={project.linkDemo} >Demo <i className="fa-solid fa-angles-right"></i> </a>
                  <a href={project.linkGithub} >Github <i className="fa-solid fa-angles-right"></i> </a>

                </div>
              </div>
            </>
          ))
        }




      </div>
    </>
  )
}
