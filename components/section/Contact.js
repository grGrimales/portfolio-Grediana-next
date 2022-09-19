
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { isEmail } from '../../utils/validation';
import styles from '../../styles/Contact.module.scss'
import portfolioApi from "../../api/portfolioApi";

export const Contact = () => {

    const [ showError, setShowError ] = useState(false);
    const { register, resetField, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = async (data) => {

        try {
            const bd = await portfolioApi.post("/contact", data);

         resetField();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: '¡Mensaje enviado con Éxito!',
                showConfirmButton: false,
                timer: 1500
              })
            
        } catch (error) {

            console.log(error)
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Error!",
                text: error,
                showConfirmButton: false,
                timer: 1500
              })
        }

    }
    return (
        <section id='contact' className={`section ${styles.contact}`}>

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

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate>
                        <label htmlFor='name'>Nombre</label>
                        <input
                            type='text'
                            name='name'
                            placeholder='Ingrese su nombre...'
                            {...register("name", {
                                required: "*Nombre es requerido",
                            })}
                        />

                        {<span>{errors.name?.message}</span>}


                        <div className={styles.inputGroup}>

                            <div>
                                <label htmlFor='phone'>Telefono</label>
                                <input
                                    type='text'
                                    name='phone'
                                    placeholder='Ingrese su número de telefóno'
                                    {...register("phone", {
                                        required: "*Telefóno es requerido",
                                    })} />
                                {<span>{errors.phone?.message}</span>}

                            </div>
                            <div>


                                <label htmlFor='email'>Email</label>

                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Ingrese su número correo'
                                    {...register("email", {
                                        required: "*Email es requerido",
                                        validate: isEmail
                                    })} />
                                {<span>{errors.email?.message}</span>}
                                {<span>{!!errors.email}</span>}



                            </div>
                        </div>
                        <label htmlFor='message'>Mensaje</label>

                        <textarea 
                        name="message"
                         rows="10"
                          cols="50"
                          {...register("message", {
                            required: "*El mensaje es requerido",
                        })}
                         >

                         </textarea>
                                {<span>{errors.message?.message}</span>}

                        <button type='submit' className={styles.btnForm}>Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
