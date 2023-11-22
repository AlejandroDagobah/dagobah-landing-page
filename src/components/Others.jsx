import React from "react";
import {others} from "../info";
import { motion, AnimatePresence } from "framer-motion"

import {IconArrowBadgeLeft, IconLink, IconArrowBadgeRight} from "@tabler/icons";


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

    function turnRed(e){
        var element = e.srcElement
        var icon = element.getElementsByClassName('iconCard')[0]
        var title = element.getElementsByClassName('titleCard')[0]

        icon.style.color = '#2592A4'
        title.style.color = '#2592A4'
        
    }
    function turnOffRed(e){
        var element = e.srcElement
        var icon = element.getElementsByClassName('iconCard')[0]
        var title = element.getElementsByClassName('titleCard')[0]

        icon.style.color = '#0D1821'
        title.style.color = '#0D1821'
        
    }


    React.useEffect(()=>{

        setWebsitesCards(()=>{
            return currentOthers.map((othersCard, cardIndex) =>{
    
                let tags = othersCard.tags.map((item, index) =>{
                    return <span key={index} className="font-sourceCodePro text-xs pr-4 text-aleBlue/60">{item}</span>
        
                })
        
                let website = <a key={cardIndex} target="_noreferrer" href={othersCard.prod !== undefined ? othersCard.prod : othersCard.repo}>
                                    <AnimatePresence wait>
                                    <motion.div
                                            
                                        whileHover={{ y: -10 }}
                                        whileTap={{ y: -10 }}
                                        transition={{ duration: 0.1}}
                                        className="aspect-square flex flex-col w-full h-full border-secondary border-2 p-8 justify-center bg-primary text-start items-start justify-between transition-all duration-100 hover:drop-shadow-lg"
                                        onHoverStart={(e)=>{turnRed(e)}}
                                        onHoverEnd={(e)=>{turnOffRed(e)}}
                                    >
                                        <div>
                                            <div className="flex flex-row justify-between w-full mb-3">
                                            {
                                                <othersCard.icon size={65} stroke={1.5} className="iconCard -ml-[6px] transition-all duration-300 text-secondary"/>}
                                                <div className="flex flex-row">
                                                    {othersCard.repo !== undefined && 
                                                        <a href={othersCard.repo} target="_blank">
                                                            <othersCard.iconLink size={30} className="pb-2 transition duration-200 text-secondary hover:text-aleRed"/>
                                                        </a>
                                                    }
                                                    {
                                                    othersCard.prod !== undefined && 
                                                        <a href={othersCard.prod} target="_blank">
                                                            <IconLink size={30}  className="pb-2 transition duration-200 hover:text-aleRed"/>
                                                        </a>
                                                    }

                                                </div>
                                            
                                            </div>
                                            <div>
                                                <h3 className="titleCard">{othersCard.title}</h3>
                                                <p className="text-[12px] mt-px">{othersCard.description}</p>
                                            </div>
                                        </div>
                                        <div>
                                            {tags}
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
                <h2 className="flex items-center w-full leading-6 sm:whitespace-nowrap after:content-[''] after:ml-3 after:block after:relative after:top-1  after:w-full after:h-px after:bg-secondary"><span className="mr-1 text-aleBlue">04.</span>Otros Proyectos</h2>
                
                <div className="mt-2">
                    <IconArrowBadgeLeft size={30} onClick={()=>setWebsites(-1)} className="transition duration-200 text-secondary hover:text-aleRed cursor-pointer"/>
                </div>
                <div className="mt-2">
                    <IconArrowBadgeRight size={30} onClick={()=>setWebsites(1)} className="transition duration-200 text-secondary hover:text-aleRed cursor-pointer"/>
                </div>

            </div>
           
            <div className="grid gap-3 mt-6 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3">
                {websitesCards}

            </div>
        </div>
    )
}