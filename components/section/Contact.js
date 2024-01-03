import { useState } from "react";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { isEmail } from '../../utils/validation';
import styles from '../../styles/Contact.module.scss'
import portfolioApi from "../../api/portfolioApi";
import { useTranslation } from "next-i18next";

export const Contact = () => {
    const { t } = useTranslation("common");

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


        <section id='contact' className={`section ${styles.contact} animate__animated animate__fadeInDown`}>

            <h2>{t("contactTitle")}</h2>


            <div className={`container ${styles.contact__container}`}>

                <div className={styles.contact__info}>
                    <h3>Grediana Rojas Grimales</h3>

                    <a href='mailto: grojasgrimales@gmail.com?Subject=¡Hola!%20me%20gustaría%20contactarte%20'><i className="fa-solid fa-envelope"></i>  grojasgrimales@gmail.com </a>
                    <a href='tel:+5548991630333'><i className="fa-solid fa-phone"></i> 48991630333</a>

                    <div className={styles.contact__redes}>
                        <h3>{t("contactRedes")}</h3>
                        <div className={styles.redesContainer}>
                            <a
                                href='https://www.linkedin.com/in/grediana-rojas-066913262/'
                                target="_blank"
                                rel={"noreferrer"}
                            ><i className="fa-brands fa-linkedin"></i>
                            </a>

                            <a
                                href='https://api.whatsapp.com/send?phone=+5548991630333&text=%C2%A1Hola!%20me%20gustar%C3%ADa%20contactar%20contigo.'
                                target="_blank"
                                rel={"noreferrer"}
                            ><i className="fa-brands fa-whatsapp"></i></a>
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
                        <label htmlFor='name'>{t("contactForm")}</label>
                        <input
                            type='text'
                            name='name'
                            placeholder={t("contactFormName")}
                            {...register("name", {
                                required: `${t("contactFormName")}`,
                            })}
                        />
                        <div>

                            {<span>{errors.name?.message}</span>}
                        </div>


                        <div className={styles.inputGroup}>

                            <div>
                                <label htmlFor='phone'>{t("contactFormPhone")}</label>
                                <input
                                    type='text'
                                    name='phone'
                                    placeholder={t("contactFormPhonePlaceholder")}
                                    {...register("phone", {
                                        required: `${t("contactFormPhoneRequired")}`,
                                    })} />

                                <div>

                                    {<span>{errors.phone?.message}</span>}
                                </div>

                            </div>
                            <div>


                                <label htmlFor='email'>{t("contactFormEmail")}</label>

                                <input
                                    type='email'
                                    name='email'
                                    placeholder={t("contactFormEmailPlaceholder")}
                                    {...register("email", {
                                        required: `${t("contactFormEmailRequired")}`,
                                        validate: isEmail
                                    })} />

                                <div>

                                    {<span>{errors.email?.message}</span>}
                                    {<span>{!!errors.email}</span>}
                                </div>




                            </div>
                        </div>
                        <label htmlFor='message'>{t("contactFormMessage")}</label>

                        <textarea
                            name="message"
                            rows="10"
                            cols="50"
                            {...register("message", {
                                required: `${t("contactFormMessageRequired")}`,
                            })}
                        >

                        </textarea>
                        {<span>{errors.message?.message}</span>}

                        <button type='submit' className={styles.btnForm} disabled={isDisabled} >{t("contactBtn")}</button>
                    </form>
                </div>
            </div>

        </section>
    )
}
