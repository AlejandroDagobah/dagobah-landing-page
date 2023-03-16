import React from "react";
import Atropos from "atropos/react";
import styles from "../style"
import {others} from "../info";
import { motion, AnimatePresence } from "framer-motion"

import {IconArrowBadgeLeft, IconBrandGithub, IconLink, IconArrowBadgeRight} from "@tabler/icons";

const variants = {
    hover: {
        color: '#FF5A5F'
    },
    initial: {
        color: '#0D1821'
    }
};

export default function Other() {

    const [currentProjNum, setCurrentProjNum] = React.useState({first:0, end:5})
    const [websitesCards, setWebsitesCards] = React.useState()

    const currentOthers = others.filter(item => others.indexOf(item) >= currentProjNum.first && others.indexOf(item) <= currentProjNum.end);

    function setWebsites(group) {
        setCurrentProjNum( (oldState)=>{
            
            if(group < 0 ){
                
                if (oldState.first <= 0) {
                    return {...oldState}
                }else{
                    return {first:oldState.first - 6, end:oldState.end - 6}
                }

            }else{

                if (oldState.end >= others.length-1) {
                    return {...oldState}
                }else{
                    return {first:oldState.first + 6, end:oldState.end + 6}
                }
            }

        })
    }

    React.useEffect(()=>{

        setWebsitesCards(()=>{
            return currentOthers.map((othersCard, cardIndex) =>{
    
                let tags = othersCard.tags.map((item, index) =>{
                    return <span key={index} className="font-sourceCodePro text-xs pr-4">{item}</span>
        
                })
        
                let website = 
                <a key={cardIndex} target="_blank" href={othersCard.prod != undefined ? othersCard.prod : othersCard.repo} >
                        <AnimatePresence wait>
                        <motion.div
                                
                                whileHover={{ y: -10 }}
                                whileTap={{ y: -10 }}
                                transition={{ duration: 0.3}}

                            >
                            <div className="border-secondary border-2 p-3 h-[100%] flex flex-col justify-center align-middle bg-primary"> 
                                <div className="flex flex-row  justify-end">
                                    {othersCard.repo != undefined && 
                                        <a href={othersCard.repo} target="_blank">
                                            <othersCard.iconLink size={30} className="pb-2 transition duration-200 hover:text-aleRed"/>
                                        </a>
                                    }
                                    {
                                    othersCard.prod != undefined && 
                                        <a href={othersCard.prod} target="_blank">
                                            <IconLink size={30}  className="pb-2 transition duration-200 hover:text-aleRed"/>
                                        </a>
                                    }

                                </div>

                                {<othersCard.icon size={50} className="pb-2 transition duration-200 text-secondary"/>}
                                <h3 className="truncate">{othersCard.title}</h3>
                                <p className="text-[12px] mt-3">{othersCard.description}</p>
                                <div className="relative my-4">
                                    {tags}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </a>
                        

                return website
            })
        })
    }, [currentProjNum])



    return(
        <div id="others" className="my-28">
            <div className="flex items-center ">
                <h2 className="flex items-center w-full leading-6 sm:whitespace-nowrap after:content-[''] after:ml-3 after:block after:relative after:top-1  after:w-full after:h-px after:bg-secondary"><span className="mr-1 text-aleRed">04.</span> Otros Proyectos Chéveres</h2>
                
                <div className="mt-2">
                    <IconArrowBadgeLeft size={30} onClick={()=>setWebsites(-1)} className="transition duration-200 text-secondary hover:text-aleRed cursor-pointer"/>
                </div>
                <div className="mt-2">
                    <IconArrowBadgeRight size={30} onClick={()=>setWebsites(1)} className="transition duration-200 text-secondary hover:text-aleRed cursor-pointer"/>
                </div>

            </div>
            <div className="others grid before:pb-[0px] gap-2 sm:before:pb-[100%] sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 md:gap-4 md:grid-auto-rows py-4">
        
                {websitesCards}
            </div>
        </div>
    )
}