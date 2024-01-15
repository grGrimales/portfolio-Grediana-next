

import styles from '../../styles/Modal.module.scss';

export const Modal = ({ modalIsOpen, closeModal, content }) => {


    return (
        <>
            {
                modalIsOpen &&

                <div className={styles.overlay}>
                    <div className={styles.contenedorModal}>

                        <div className={styles.contenedorTitle}>
                            <h3> <i className="fa-solid fa-laptop-code"></i> {content.title}</h3>
                            <i className="fa-solid fa-laptop-mobile"></i>
                            <button onClick={closeModal}><i className="fa-solid fa-xmark"></i></button>
                        </div>
                        <div className={styles.contentModal}>


                            <h4> <i className="fa-regular fa-circle-check"></i> Descripción: </h4>
                            <span>{content.description}</span>
                            <h4> <i className="fa-regular fa-circle-check"></i> Tecnologías:</h4>
                            <ul>

                                {
                                    content.technologies.map((tec) => (
                                        <li key={tec}>
                                            <i className=
                                                {`${tec === 'SASS' ? 'fa-brands fa-sass'
                                                    : tec === 'React' ? 'fa-brands fa-react'
                                                        : tec === 'Figma' ? 'fa-brands fa-figma'
                                                            : tec === 'HTML5' ? 'fa-brands fa-html5'
                                                                : tec === 'CSS' ? 'fa-brands fa-css3-alt'
                                                                    : tec === 'JavaScript' ? 'fa-brands fa-square-js'
                                                                        : tec === 'Next.js' ? 'fa-thin fa-n'
                                                                            : tec === 'Node.js' ? 'fa-brands fa-node'
                                                                                : tec === 'Firebase' ? 'fa-brands fa-react'
                                                                                : tec === 'Semantic UI' ? 'fa-brands fa-react'

                                                                                    : ''}`}></i> {tec}</li>
                                    ))
                                }



                            </ul>

                        </div>
                    </div>
                </div>

            }
        </>
    )
}
