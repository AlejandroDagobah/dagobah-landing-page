import React from "react";

import {IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconBrandInstagram, IconBrandDribbble, IconBrandWhatsapp, IconStar, IconGitFork} from "@tabler/icons";


export default function FixedContact() {

    function contactIcons(isMovil) {

        const styleDesktop= "flex flex-col align-items after:content-[' '] after:h-[90px] after:w-[1px] after:mt-4 after:mx-auto after:bg-secondary";
        const styleMovil= "flex flex-row align-items pb-2 block lg:hidden";

        return(

            <ul className={isMovil ? styleMovil : styleDesktop }>
                <li className="py-2 px-3 lg:px-0">
                    <a href="https://github.com/AlejandroDagobah" target="_noreferrer">
                        <IconBrandGithub size={25} className="transition duration-200 text-secondary hover:text-aleRed cursor-pointer"/>
                    </a>
                </li>
                <li className="py-2 px-3 lg:px-0">
                    <a href="https://www.linkedin.com/in/alejandro-cevallos/" target="_noreferrer">
                        <IconBrandLinkedin size={25} className="transition duration-200 text-secondary hover:text-aleRed cursor-pointer"/>
                    </a>
                </li>
                <li className="py-2 px-3 lg:px-0">
                    <a href="https://twitter.com/aledagobah" target="_noreferrer">
                        <IconBrandTwitter size={25} className="transition duration-200 text-secondary hover:text-aleRed cursor-pointer"/>
                    </a>
                </li>
                <li className="py-2 px-3 lg:px-0">
                    <a href="https://www.instagram.com/aledevelops/" target="_noreferrer">
                        <IconBrandInstagram size={25} className="transition duration-200 text-secondary hover:text-aleRed cursor-pointer"/>
                    </a>
                </li>
                <li className="py-2 px-3 lg:px-0">
                    <a href="https://dribbble.com/Dagobah" target="_noreferrer">
                        <IconBrandDribbble size={25} className="transition duration-200 text-secondary hover:text-aleRed cursor-pointer"/>
                    </a>
                </li>
                <li className="py-2 px-3 lg:px-0">
                    <a href="https://wa.me/593962801800" target="_noreferrer">
                        <IconBrandWhatsapp size={25} className="transition duration-200 text-secondary hover:text-aleRed cursor-pointer"/>
                    </a>
                </li>
                
            </ul>
        )
    }


    return(

        <div>
            <div className="invisible lg:visible">
                <div className="fixed bottom-0 left-[5rem]">
                    {contactIcons(false)}
                </div>
                
                <div className="fixed bottom-0 right-[5rem]">
                    <div className="flex flex-col align-items after:content-[' '] after:h-[90px] after:w-[1px] after:mt-4 after:mx-auto after:bg-secondary">
                        <a id="mail" className="transition duration-200 font-sourceCodePro text-secondary hover:text-aleRed cursor-pointer pb-2" href="mailto:alejandrodagobah@gmail.com">alejandrodagobah@gmail.com</a>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center py-6 border-t-[1px] py-4 lg:py-0 lg:h-[90px] border-secondary bg-primary">
                    
                    {contactIcons(true)}
                    
                    <a className="transition duration-200 text-[0.8rem] font-sourceCodePro font-medium text-secondary hover:text-aleRed cursor-pointer whitespace-nowrap text-ellipsis	text-center" href="https://github.com/AlejandroDagobah/dagobah-landing-page">Revisa el repositorio de este <br/> portafolio y dale una <IconStar size={15} className="whitespace-nowrap inline"/> o un <IconGitFork size={15} className="whitespace-nowrap inline"/></a>


                </div>
            </div>

        </div>
    )
}