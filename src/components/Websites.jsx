import React from "react";
import Atropos from "atropos/react";
import styles from "../style"
export default function Website() {

    return(
        <div className=" my-28">
        <h2 className="flex items-center whitespace-nowrap w-full after:content-[''] after:ml-3 after:block after:relative after:top-1  after:w-full after:h-px after:bg-secondary"><span className="mr-1 text-aleRed">02.</span> Trabajo Destacado</h2>
            
        <Atropos 
            className="my-atropos"
            activeOffset={40}
            shadowScale={0}    
        >
            <div className="border-secondary border-2 h-[32rem] sm:h-[20rem] w-full py-12 px-8 sm:px-8 z-10 flex flex-col sm:flex-row sm:justify-between sm:flex-row sm:max-w-1/2 sm:mt-3"> 
                <div className="website md:w-1/2 flex flex-col sm:justify-center" data-atropos-offset="5">
                    <h3>Joyería Flor de la Vida</h3>
                    <p className="text-[12px] mt-3">Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto.</p>
                    <div className="mt-6">
                        <span className="bg-secondary text-primary p-2 px-3 rounded-md text-xs">e-commerce</span>
                        <span className="bg-secondary text-primary p-2 px-3 ml-2 rounded-md text-xs">Web design</span>
                    </div>
                </div>

                <div className="mt-10 sm:mt-0 xs:w-full xs:px-20 ss:px-0 ss:pl-16 sm:pl-18">
                    <img src="img/web-fdlv-img.png" className={`${styles.websitesImg} -z-20 max-w-none -left-[30%] w-[140%] sm:top-[12%]`} data-atropos-offset="-7"/>

                    <img src="img/phone-fdlv-img.png" className={`${styles.websitesImg} -z-10 -top-[40%] left-[57%] w-[70%] sm:-top-[40%] sm:w-[60%]`} data-atropos-offset="-5"/>
                </div>
            </div>

        </Atropos>
       
    </div>
    )
}