
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { isEmail } from '../../utils/validation';
import styles from '../../styles/Contact.module.scss'
import portfolioApi from "../../api/portfolioApi";
import { useState } from "react";

export const Contact = () => {

    const { register, reset, handleSubmit, formState: { errors }, } = useForm();
const [isDisabled, setIsDisableb] = useState(false)
    const onSubmit = async (data) => {
        try {
            setIsDisableb(true)
            const bd = await portfolioApi.post("/contact", data);
            setIsDisableb(false)

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: '¡Mensaje enviado con Éxito!',
                showConfirmButton: false,
                timer: 1500
            })
            reset();
           
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

                    <a href='mailto: grojasgrimales@gmail.com?Subject=¡Hola!%20me%20gustaría%20contactarte%20'><i className="fa-solid fa-envelope"></i>  grojasgrimales@gmail.com </a>
                    <a href='tel:+51923929618'><i className="fa-solid fa-phone"></i> 923 929 618 </a>

                    <div className={styles.contact__redes}>
                        <h3>Sígueme</h3>
                        <div className={styles.redesContainer}>
                            <a
                                href='https://www.linkedin.com/in/grediana-rojas/'
                                target="_blank"
                                rel={"noreferrer"}
                            ><i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a
                                href='https://github.com/grGrimales/'
                                target="_blank"
                                rel={"noreferrer"}
                            ><i className="fa-brands fa-github"></i></a>
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

                        <button type='submit' className={styles.btnForm} disabled={isDisabled} >Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
