import styles from '../../styles/Contact.module.scss'

export const Contact = () => {
    return (
        <section className={`setion ${styles.contact}`}>

            <h2>Contáctame</h2>


            <div className={`container ${styles.contact__container}`}>

                <div className={styles.contact__info}>
                    <h3>Grediana Rojas Grimales</h3>

                    <a href='#'><i className="fa-solid fa-envelope"></i>  grojasgrimales@gmail.com </a>
                    <a href='#'><i className="fa-solid fa-phone"></i> 923 929 618 </a>

                    <div className={styles.contact__redes}>
                        <h3>Sígueme</h3>
                        <div className={styles.redesContainer}>


                            <a href='#'><i className="fa-brands fa-linkedin"></i></a>
                            <a href='#'><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>

                </div>

                <div className={styles.contact__form}>

                    <form>
                        <label id='name'>Nombre</label>
                        <input type='text' name='name' placeholder='Ingrese su nombre...' />



                        <div className={styles.inputGroup}>

                            <div>
                                <label id='phone'>Telefono</label>
                                <input type='text' name='phone' placeholder='Ingrese su número de telefóno' />
                            </div>
                            <div>


                                <label id='email'>Email</label>

                                <input type='email' name='email' placeholder='Ingrese su número correo' />
                            </div>
                        </div>
                        <label id='message'>Mensaje</label>

                        <textarea name="message" rows="10" cols="50"></textarea>
                        <button type='submit' className={styles.btnForm}>Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
