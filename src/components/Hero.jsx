import React from "react";
import { moveAvatar } from "../avatar";
import Alevector from "./Alevector";

export default function Hero(props) {


    return(
        <div className="flex-col-reverse flex sm:flex-row justify-between">

            <div className="flex flex-col justify-center items-center sm:items-start">
                <p className="text-xl font-medium sm:text-2xl">Hola, mi nombre es:</p>
                <h1 className="font-crimsonPro font-bold text-center sm:text-start">
                    <span className="text-7xl" id="ale">Alejandro.</span>

                    <br></br>
                    <span className="text-aleRed text-3xl sm:text-4xl md:text-7xl">Y desarrollo proyectos digitales.</span>
                </h1>

                <a href="#" className="text-aleBlue font-extrabold tracking-customWide text-2xl mt-6 py-2 px-7 border-4 sm:border-2 sm:mt-10 sm:text-xl border-aleBlue rounded-md">┬íHABLEMOS!</a>
            
            </div>
            <div className="image my-6 md:my-0 flex justify-center sm:justify-end">
            <Alevector/>

            
            </div>
        </div>
    )
    
}

