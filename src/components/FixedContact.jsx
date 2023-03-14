import React from "react";

import {IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconBrandInstagram, IconBrandDribbble, IconMail, IconStar, IconGitFork} from "@tabler/icons";


export default function FixedContact() {

    return(

        <div>
            <div className="invisible lg:visible">
                <div className="fixed bottom-0 left-[5rem]">
                    <ul className="flex flex-col align-items after:content-[' '] after:h-[90px] after:w-[1px] after:mt-4 after:mx-auto after:bg-secondary">
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
                    <div className="flex flex-col align-items after:content-[' '] after:h-[90px] after:w-[1px] after:mt-4 after:mx-auto after:bg-secondary">
                        <a id="mail" className="transition duration-200 font-sourceCodePro text-secondary hover:text-aleRed cursor-pointer pb-2" href="mailto:alejandrodagobah@gmail.com">alejandrodagobah@gmail.com</a>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center py-6 border-t-[1px] py-4 lg:py-0 lg:h-[90px] border-secondary bg-primary">
                    <ul className="flex flex-row align-items pb-2 block lg:hidden">
                        <li className="p-4">
                            <a href="https://github.com/AlejandroDagobah" target="_blank">
                                <IconBrandGithub size={25} className="transition duration-200 text-secondary hover:text-aleRed cursor-pointer"/>
                            </a>
                        </li>
                        <li className="p-4">
                            <a href="https://www.linkedin.com/in/alejandro-cevallos/" target="_blank">
                                <IconBrandLinkedin size={25} className="transition duration-200 text-secondary hover:text-aleRed cursor-pointer"/>
                            </a>
                        </li>
                        <li className="p-4">
                            <a href="https://twitter.com/aledagobah" target="_blank">
                                <IconBrandTwitter size={25} className="transition duration-200 text-secondary hover:text-aleRed cursor-pointer"/>
                            </a>
                        </li>
                        <li className="p-4">
                            <a href="https://www.instagram.com/ale_develops/" target="_blank">
                                <IconBrandInstagram size={25} className="transition duration-200 text-secondary hover:text-aleRed cursor-pointer"/>
                            </a>
                        </li>
                        <li className="p-4">
                            <a href="https://dribbble.com/Dagobah" target="_blank">
                                <IconBrandDribbble size={25} className="transition duration-200 text-secondary hover:text-aleRed cursor-pointer"/>
                            </a>
                        </li>

                        <li className="p-4">
                            <a href="mailto:alejandrodagobah@gmail.com" target="_blank">
                                <IconMail size={25} className="transition duration-200 text-secondary hover:text-aleRed cursor-pointer"/>
                            </a>
                        </li>
                        
                    </ul>

                    
                    <a className="transition duration-200 text-[0.8rem] font-sourceCodePro font-medium text-secondary hover:text-aleRed cursor-pointer whitespace-nowrap text-ellipsis	text-center" href="https://github.com/AlejandroDagobah/dagobah-landing-page">Revisa el repositorio de este <br/> portafolio y dale una <IconStar size={15} className="whitespace-nowrap inline"/> o un <IconGitFork size={15} className="whitespace-nowrap inline"/></a>


                </div>
            </div>

        </div>
    )
}