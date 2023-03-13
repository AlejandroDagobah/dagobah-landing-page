import React from "react";

import {navLinks} from "../constants/index"
import { IconMenu2,  IconX} from "@tabler/icons";

export default function Header(props) {

    var navElements = navLinks.map((item, index)=>{

        return <a key={index} href={item.link} className={`mb-16 text-primary text-lg flex font-sourceCodePro md:items-center md:justify-center md:px-2 md:text-secondary md:mb-0 md:text-sm md:p-2`}><span className="number text-aleRed pr-2 md:pr-2">0.{index + 1}</span> {item.title}</a>

    })

    return(
        <div className="w-full flex justify-between items-center py-4 sm:pb-20 sm:pt-12 navbar">
            <img src="img/aledevelops-logo.png" className="w-52 sm:w-[180px]"/>

            <nav className="hidden md:flex">
                
                {navElements}

                <a href="#" className="rounded-md border-2 border-aleBlue px-5 py-1 ml-5 text-center text-aleBlue font-bold">CURRICULUM</a>
            </nav>
            <nav className="flex md:hidden z-10">

                <div className="icon">
                    {props.toggle ? <IconX  size={30} color={props.toggle ? '#F5F5F5' : '#0D1821'} stroke={3} onClick={() => props.setToggle(prevToggle=>(!prevToggle))}/>  : <IconMenu2  size={30} color="black" stroke={3} onClick={() =>  props.setToggle(prevToggle=>(!prevToggle))}/> }
                </div>
            </nav>


            <div className={`flex transition-all duration-200 ${props.toggle ? `translate-x-0` : 'translate-x-full' }  px-20 pt-10 bg-secondary fixed top-0 right-0 justify-center w-full h-screen z-0 flex-col`}>
                {navElements}
                <a href="#" className={`rounded-md bg-aleBlue py-2 mt-5 text-primary font-bold text-lg text-center tracking-customWide`}>CURRICULUM</a>

            </div>

        </div>
    )
    
}