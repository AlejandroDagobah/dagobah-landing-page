import React from "react";

import {navLinks} from "../constants/index"
import { IconMenu2 } from "@tabler/icons";

export default function Header() {

    var navElements = navLinks.map((item, index)=>{

        return <a href={item.link} className="nav-item px-5 flex items-center justify-center"><span className="number text-aleRed pr-2">0.{index + 1}</span> {item.title}</a>

    })

    return(
        <div className="w-full flex justify-between items-center md:py-6 sm:py-14 navbar">
            <img src="img/aledevelops-logo.png" className="md:w-[180px] sm:w-[380px]"/>

            <nav className="sm:hidden md:flex">
                
                {navElements}

                <a href="#" className="rounded-md border-2 border-aleBlue px-5 ml-5 text-aleBlue font-bold">Curriculum</a>
            </nav>
            <nav className="sm:flex md:hidden">
                <IconMenu2  size={70} color="black" stroke={3}/>
            </nav>
        </div>
    )
    
}