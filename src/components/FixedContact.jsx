import React from "react";

import {IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconBrandInstagram, IconBrandDribbble} from "@tabler/icons";


export default function FixedContact() {

    return(
        <div>
            <div className="fixed bottom-0">
                <ul className="flex flex-col align-items after:content-[' '] after:h-[90px] after:w-[1.4px] after:mt-4 after:mx-auto after:bg-secondary">
                    <li className="py-2">
                        <a href="https://github.com/AlejandroDagobah" target="_blank">
                            <IconBrandGithub size={25} className="transition duration-200 text-secondary hover:text-aleRed cursor-pointer"/>
                        </a>
                    </li>
                    <li className="py-2">
                        <a href="https://www.linkedin.com/in/alejandro-cevallos/" target="_blank">
                            <IconBrandLinkedin size={25} className="transition duration-200 text-secondary hover:text-aleRed cursor-pointer"/>
                        </a>
                    </li>
                    <li className="py-2">
                        <a href="https://twitter.com/aledagobah" target="_blank">
                            <IconBrandTwitter size={25} className="transition duration-200 text-secondary hover:text-aleRed cursor-pointer"/>
                        </a>
                    </li>
                    <li className="py-2">
                        <a href="https://www.instagram.com/ale_develops/" target="_blank">
                            <IconBrandInstagram size={25} className="transition duration-200 text-secondary hover:text-aleRed cursor-pointer"/>
                        </a>
                    </li>
                    <li className="py-2">
                        <a href="https://dribbble.com/Dagobah" target="_blank">
                            <IconBrandDribbble size={25} className="transition duration-200 text-secondary hover:text-aleRed cursor-pointer"/>
                        </a>
                    </li>
                    
                </ul>
            </div>
            
            <div className="fixed bottom-0 right-[5rem]">
                <div className="flex flex-col align-items after:content-[' '] after:h-[90px] after:w-[1.4px] after:mt-4 after:mx-auto after:bg-secondary">
                    <a id="mail" className="transition duration-200 font-sourceCodePro text-secondary hover:text-aleRed cursor-pointer" href="mailto:alejandrodagobah@gmail.com">alejandrodagobah@gmail.com</a>
                </div>
            </div>
        </div>
    )
}