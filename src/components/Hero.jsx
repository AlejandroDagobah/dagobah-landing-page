import React from "react";

export default function Hero() {

    return(
        <div className="hero">
            
            <div className="hero--text">
                <p className="subtitle">Hola, mi nombre es:</p>
                <h1>Alejandro Cevallos. 
                    <br></br>
                    <span className="red-title">Y desarrollo proyectos digitales.</span>
                    </h1>
                    <a href="#" className="action-btn hero-btn">¡Hablemos!</a>

            </div>
            <div className="hero--image">
                <div className="eye">
                    <div className="ball">
                </div>

                </div>
              

                <img src="img/Ale-vector.svg" className="ale-vector" />
            </div>
           


        </div>
    )
    
}