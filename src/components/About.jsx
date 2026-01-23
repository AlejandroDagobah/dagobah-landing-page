import React from "react";

export default function About() {

    return(
        <div id="about-me">

            <div className="flex flex-col sm:flex-row sm:justify-between">
                <div className="sm:basis-1/2">
                    <h2 className="flex whitespace-nowrap items-center w-full after:content-[''] after:ml-3 after:block after:relative after:top-1  after:w-full after:h-px after:bg-secondary"><span className="mr-1 text-aleRed">01.</span> <span></span> Acerca de mí</h2>
                    <p className="mb-6 mt-2 leading-5 aboutText">
                            
                        Soy un desarrollador obsesionado con la creación de sitios web, aplicaciones y experiencias digitales <b>visualmente impresionantes</b>, que a su vez mantengan un <b>alto rendimiento</b>, fluidez y facilidad de uso. Mi enfoque está en fusionar la <b>creatividad artística</b> con una <b>ingeniería sólida</b>, diseñando interfaces que no solo brillan por su estética, sino que también ofrezcan una <b>experiencia intuitiva</b> y sin fricciones. Mi misión es entregar productos que no solo se vean bien, sino que hagan que los usuarios disfruten cada segundo de interacción.
                        <br/>
                        <br/>
                        Actualmente soy <b>Lead Developer en <a className="text-aleRed" href="https://www.hipopink.com" target="_blank" rel="noreferrer noopener">Hipopink</a></b>, lidero el equipo de desarrollo web, supervisando todo el proceso desde el descubrimiento del cliente y la planificación del proyecto hasta el diseño, desarrollo y despliegue de sitios web personalizados. Soy un defensor de <b>soluciones escalables y de alto rendimiento</b>, utilizando React, Gatsby y GraphQL para arquitecturas Headless CMS.
                        <br/>

                        <br/>
                        He tenido la oportunidad de trabajar como desarrollador interno en <b>empresas privadas</b>, así como en <b>agencias de publicidad</b>, pasando también por el mundo <b>freelance</b>. Esto me ha brindado una base sólida en <b>diseño</b>, <b>marketing</b>, <b>SEO</b> y <b>diseño de producto</b>. Combino todas estas habilidades para entregar productos digitales que no solo sean visualmente atractivos, sino que también cumplan una <b>función estratégica</b> para el cliente.
                        <br/>

                        <br/>
                        En mi tiempo libre, me puedes encontrar leyendo, dibujando, manteniéndome al tanto de lo que sucede en el mundo, tomando café, pasando tiempo con mi familia o quizás aprendiendo algún <b>arte shinobi</b>. 🥷

                    </p>

                </div>

                <div className="flex justify-center sm:justify-end grow my-6 sm:my-0 sm:p-0 sm:w-[200%] md:w-[100%] sm:basis-1/2">
                    <img src="./img/retrato-2.png" className="self-start my-8 ml-8 w-[80%] grayscale hover:grayscale-0 transition duration-200" alt="" />
                </div>
            
            </div>
           
        </div>
    )
}