import React from "react";
import Alevector from "./Alevector";

import styles from "../style";

export default function Hero() {


    return(
        <div className="flex-col-reverse flex sm:flex-row justify-center md:justify-between">

            <div className="flex flex-col justify-center items-center sm:items-start">
                <p className="text-xl font-medium sm:text-2xl">Hola, mi nombre es:</p>
                <h1 className="font-crimsonPro font-bold text-center sm:text-start">
                    <span className="text-7xl" id="ale">Alejandro.</span>

                    <br></br>
                    <span className="text-aleRed text-3xl sm:text-4xl md:text-7xl">Y desarrollo proyectos digitales.</span>
                </h1>

                <a href="https://wa.me/593962801800" className={`${styles.blueButton}`}>¡Hablemos!</a>
            
            </div>
            <div className="flex justify-end items-center sm:justify-end mb-4 sm:mb-0 px-[2rem] sm:px-[0rem] max-w-[400px]">
                <Alevector/>
            </div>
        </div>
    )
    
}

