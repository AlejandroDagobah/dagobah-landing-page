import React from "react";

import {navLinks} from "../constants/index"
import { IconMenu2,  IconX} from "@tabler/icons";


export default function Header() {

    
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [scrollState, setScrollState] = React.useState(0);


  React.useEffect(()=>{

    var lastScroll = 0;

    function handleScroll(){
        
        var currentScroll = window.scrollY;
    
        if(currentScroll > lastScroll){
            setScrollState(1)
        }else if(currentScroll == 0){
            setScrollState(0)
        }else if(currentScroll < lastScroll){
            setScrollState(2)
    
        }
        
        lastScroll = currentScroll <= 0 ? 0 : currentScroll ;

    }
  
    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener("scroll", handleScroll);

  }, [])


  var scrollClassName = scrollState ? "dropMenuOnDown" : "dropMenuOnUp" ;

  switch (scrollState) {
    case 0:
      scrollClassName = "dropMenuOff"
    break;

    case 1:
      scrollClassName = "dropMenuOnUp"
    break;
  
    case 2:
      scrollClassName = "dropMenuOnDown"
    break;
    
   }


    var navElements = navLinks.map((item, index)=>{

        return <a key={index} href={item.link} onClick={() => setToggleMenu(false)} className={`mb-16 text-primary text-lg flex font-sourceCodePro md:items-center md:justify-center md:px-2 md:text-secondary md:mb-0 md:text-sm md:p-2 transition duration-150 hover:bg-secondaryDarker md:hover:bg-aleRedLight hover:translate-y-[-0.2rem]`}><span className="number text-aleRed pr-2 md:pr-2">0.{index + 1}</span> {item.title}</a>

    })

    React.useEffect(()=>{
        if (toggleMenu) {
            document.body.style.overflowY = "hidden"
        }else{
            document.body.style.overflowY = "scroll"

        }

    }, [toggleMenu])

    return(
        <div className={`fixed top-0 start-0 z-50 flex justify-between w-full px-[1rem] sm:px-[5rem] dropMenuOff transition-all ease-in-out ${scrollClassName}`}>
            <div className="w-full flex justify-between items-center navbar">
                <a href="#">
                    <img src="img/aledevelops-logo.png" className="w-52 sm:w-[180px]" alt="logo de aledevelops desarrollador web de Ecuador"/>

                </a>
                <nav className="hidden md:flex">
                    
                    {navElements}

                    <a href="img/CV-alejandro.pdf" download="CV-alejandro.pdf" className="rounded-md border-2 border-aleBlue px-5 py-1 ml-5 text-center text-aleBlue font-medium transition duration-150 hover:bg-aleBlueLight hover:translate-y-[-0.2rem]">Curriculum</a>
                </nav>

                <nav className="flex md:hidden z-10">

                    <div className="icon cursor-pointer">
                        {toggleMenu ? <IconX  size={30} color={toggleMenu ? '#F5F5F5' : '#0D1821'} stroke={3} onClick={() => setToggleMenu(prevToggle=>(!prevToggle))}/>  : <IconMenu2  size={30} color="black" stroke={3} onClick={() =>  setToggleMenu(prevToggle=>(!prevToggle))}/> }
                    </div>
                </nav>


                <div className={`flex transition-all duration-200 md:hidden ${toggleMenu ? `translate-x-0` : 'translate-x-[110%]' }  px-20 pt-10 bg-secondary fixed top-0 right-0 justify-center w-full h-full z-0 flex-col`}>
                    {navElements}
                    <a href="img/CV-alejandro.pdf" download="img/CV-alejandro.pdf" className={`rounded-md bg-aleBlue py-2 mt-5 text-primary font-bold text-lg text-center tracking-customWide transition duration-150 hover:bg-aleBlueDarker md:hover:bg-aleBlueLight hover:translate-y-[-0.2rem]`}>Curriculum</a>

                </div>

            </div>
        </div>
    )
    
}