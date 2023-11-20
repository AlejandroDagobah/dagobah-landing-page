import React from "react";
import Alevector from "./Alevector";

import styles from "../style";

import { motion, AnimatePresence } from "framer-motion"

export default function Hero() {


    return(
        
        <div className="flex-col-reverse flex sm:flex-row justify-center md:justify-between">

            <div className="flex flex-col justify-center items-center sm:items-start">
                
                <motion.p  transition={{type: 'tween', delay:1}} initial={{ y: -5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} 
                    className="text-xl font-medium sm:text-2xl">Hola, mi nombre es:
                    
                </motion.p>

                <motion.h1 transition={{type: 'tween', delay:1.2}} initial={{ y: -5, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                className="font-crimsonPro font-bold text-center sm:text-start">
                    <span className="text-7xl" id="ale">Alejandro.</span>

                    <br></br>
                    <span className="text-aleRed text-3xl sm:text-4xl md:text-7xl">Y desarrollo proyectos digitales.</span>
                </motion.h1>

                <motion.a transition={{type: 'tween', delay:1.4}} initial={{ y: -5, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                
                href="https://wa.me/593962801800" className={`${styles.blueButton}`}>¡Hablemos!</motion.a>
            
            </div>
            <motion.div transition={{type: 'spring', delay:1.2}} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
            className="flex justify-end items-center sm:justify-end mb-4 sm:mb-0 px-[2rem] sm:px-[0rem] max-w-[400px]">
                <Alevector/>
            </motion.div>
        </div>
    )
    
}

