import React from "react";
import styles from "../style";

export default function Contact() {

    return(
        <div id="contact">
            <div className="flex flex-col justify-center items-center py-8 pb-28 h-[70vh]">
                <p className="font-sourceCodePro text-aleRed text-[1.5rem]">0.4 ¿Qué Sigue?</p>
                <h2 className="text-[3rem] lg:text-[3.8rem] pb-4 mt-[-0.8rem]">¡Conozcámonos!</h2>
                <p className="px-3 mb-2 md:px-[15%] text-center">Estoy abierto a trabajar con nuevas personas y empresas, me emocionan los nuevos proyectos y doy todo para que el trabajo siempre sea de la mayor calidad. Si deseas realizar un proyecto digital cuenta conmigo y contáctame con toda confianza.</p>
                <a href="https://wa.me/593962801800" className={`${styles.blueButton} text-md`}>¿Nos tomamos un ☕?</a>

            </div>
        </div>
    )
}