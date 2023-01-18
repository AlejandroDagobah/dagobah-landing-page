import React from "react";

import {navLinks} from "../constants/index"
import { IconMenu2,  IconX} from "@tabler/icons";

export default function Header(props) {

    const menuTrueStyles = 'p-2 mb-36 text-primary text-4xl'
    const menuFalseStyles = 'px-5 items-center justify-center'


    var navElements = navLinks.map((item, index)=>{

        return <a key={index} href={item.link} className={`flex font-sourceCodePro md:items-center md:justify-center md:px-5 md:text-secondary md:mb-0 md:text-sm sm:p-2 sm:mb-36 sm:text-primary sm:text-4xl`}><span className="number text-aleRed md:pr-2 sm:pr-6">0.{index + 1}</span> {item.title}</a>

    })

    return(
        <div className="w-full flex justify-between items-center md:py-6 sm:py-14 navbar">
            <img src="img/aledevelops-logo.png" className="md:w-[180px] sm:w-[380px]"/>

            <nav className="sm:hidden md:flex">
                
                {navElements}

                <a href="#" className="rounded-md border-2 border-aleBlue px-5 py-1 ml-5 text-center text-aleBlue font-bold">CURRICULUM</a>
            </nav>
            <nav className="sm:flex md:hidden z-10">

                <div className="icon">
                    {props.toggle ? <IconX  size={70} color={props.toggle ? '#F5F5F5' : '#0D1821'} stroke={3} onClick={() => props.setToggle(prevToggle=>(!prevToggle))}/>  : <IconMenu2  size={70} color="black" stroke={3} onClick={() =>  props.setToggle(prevToggle=>(!prevToggle))}/> }
                </div>
            </nav>


            <div className={`flex transition-all duration-200 ${props.toggle ? `translate-x-0` : 'translate-x-full' }  p-40 bg-secondary fixed top-0 right-0 justify-center w-3/4 h-screen z-0 flex-col`}>
                {navElements}
                <a href="#" className={`rounded-3xl bg-aleBlue px-5 py-5 text-primary font-bold text-4xl text-center tracking-widest`}>CURRICULUM</a>

            </div>

        </div>
    )
    
}