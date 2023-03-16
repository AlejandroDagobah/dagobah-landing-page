import React from "react";

export default function About() {

    return(
        <div id="about-me">

            <div className="flex flex-col sm:flex-row sm:justify-between">
                <div className="sm:basis-1/2">
                    <h2 className="flex whitespace-nowrap items-center w-full after:content-[''] after:ml-3 after:block after:relative after:top-1  after:w-full after:h-px after:bg-secondary"><span className="mr-1 text-aleRed">01.</span> <span></span> Acerca de mí</h2>
                    <p className="mb-6 leading-5 sm:pr-10 md:pr-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.</p>
                    <div className="flex text-sm font-sourceCodePro">
                        <ul className="list-disc ml-4 marker:text-aleRed">
                            <li className="py-2">HTML + CSS</li>
                            <li className="py-2">Javascript (ES6+)</li>
                            <li className="py-2">React</li>
                            <li className="py-2">Wordpress</li>
                            <li className="py-2">Unity - C#</li>
                            <li className="py-2">Node.js (Básico)</li>
                            <li className="py-2">PHP (Básico)</li>
                        </ul>
                        <ul className="list-disc ml-20 marker:text-aleRed">
                            <li className="py-2">Photoshop</li>
                            <li className="py-2">Illustrator</li>
                            <li className="py-2">After Effects</li>
                            <li className="py-2">Premiere Pro</li>

                            <li className="py-2">Figma</li>
                            <li className="py-2">SEO</li>

                            <li className="py-2 ">Inglés Conversacional</li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center sm:justify-end grow my-6 sm:my-0 sm:p-0 sm:w-[200%] md:w-[100%] sm:basis-1/2">
                    <img src="./img/alejandro-small-2.png" className="self-start my-8 ml-8 w-[80%] grayscale hover:grayscale-0 transition duration-200" alt="" />
                </div>
            
            </div>
           
        </div>
    )
}