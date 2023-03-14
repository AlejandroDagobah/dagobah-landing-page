import React from "react";
import styles from "../style";

export default function Contact() {

    return(
        <div id="contact">
            <div className="flex flex-col justify-center items-center py-8 pb-28">
                <p className="font-sourceCodePro text-aleRed text-[1.5rem]">0.4 ¿Qué Sigue?</p>
                <h2 className="text-[3.8rem] pb-4 mt-[-0.8rem]">¡Conozcamonos!</h2>
                <p className="px-3 mb-2 md:px-[15%] text-center">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                <a href="https://wa.me/593962801800" className={styles.blueButton}>¿Nos tomamos un ☕?</a>

            </div>
        </div>
    )
}