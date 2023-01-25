import React from "react";
import Atropos from "atropos/react";
export default function Website() {

    return(
        <div className=" my-28">
        <h2 className="flex items-center whitespace-nowrap w-full after:content-[''] after:ml-3 after:block after:relative after:top-1  after:w-full after:h-px after:bg-secondary"><span className="mr-1 text-aleRed">02.</span> Trabajo Destacado</h2>
            
        <Atropos 
            className="my-atropos"
            activeOffset={40}
            shadowScale={0}    
        >
            <div className="border-secondary border-2 h-[36rem] md:h-[20rem] w-full py-12 px-4 md:px-8 z-10 flex flex-col sm:flex-row sm:justify-between md:flex-row md:max-w-1/2 md:mt-3"> 
                <div className="website md:w-1/2 flex flex-col md:justify-center" data-atropos-offset="5">
                    <h3>Joyería Flor de la Vida</h3>
                    <p className="text-sm mt-3">Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto.</p>
                    <div className="mt-6">
                        <span className="bg-secondary text-primary p-2 px-3 rounded-md text-sm">e-commerce</span>
                        <span className="bg-secondary text-primary p-2 px-3 ml-2 rounded-md text-sm">Web design</span>
                    </div>
                </div>

                <div>
                    <img src="img/web-fdlv-img.png" className="absolute -z-20 top-[50%] -left-[5%] max-w-none w-[90%] ss:top-[40%] ss:w-[75%] ss:left-[3%] md:top-[12%] md:left-[40%] md:w-[47%]" data-atropos-offset="-7"/>

                    <img src="img/phone-fdlv-img.png" className="absolute -z-10 top-[60%] left-[63%] max-w-none w-[38%] ss:top-[50%] ss:w-[35%] ss:left-[60%] md:top-[23%] md:left-[75%] md:w-[24%]" data-atropos-offset="-5"/>
                </div>
            </div>

        </Atropos>
       
    </div>
    )
}