import React from "react";
import Atropos from "atropos/react";
import styles from "../style"
import {websites} from "../info";
import { motion, AnimatePresence } from "framer-motion"

import {IconArrowBadgeLeft, IconArrowBadgeRight} from "@tabler/icons";


export default function Website() {

    const [currentProjNum, setCurrentProjNum] = React.useState({first:0, end:2})
    const [websitesCards, setWebsitesCards] = React.useState()

    const currentWebsites = websites.filter(item => websites.indexOf(item) >= currentProjNum.first && websites.indexOf(item) <= currentProjNum.end);

    function setWebsites(group) {
        setCurrentProjNum( (oldState)=>{
            
            if(group < 0 ){
                
                if (oldState.first <= 0) {
                    return {...oldState}
                }else{
                    return {first:oldState.first - 3, end:oldState.end - 3}
                }

            }else{

                if (oldState.end >= websites.length-1) {
                    return {...oldState}
                }else{
                    return {first:oldState.first + 3, end:oldState.end + 3}
                }
            }

        })
    }

    React.useEffect(()=>{
        setWebsitesCards(()=>{
            return currentWebsites.map((websiteCard, cardIndex) =>{
    
                let buttons = websiteCard.buttons.map((item, index) =>{
                    return <span key={index} className="bg-secondary text-primary p-2 px-3 mr-4 rounded-md text-xs">{item}</span>
        
                })
        
                let website = 
                        <Atropos key={cardIndex} className="my-atropos" activeOffset={40} shadowScale={0}>
                                
                                <div className={`border-secondary border-2 h-[32rem] sm:h-[20rem] w-full mt-4 py-12 px-5 sm:px-8 z-10 flex flex-col sm:flex-row sm:justify-between sm:max-w-1/2 sm:mt-3`}> 
                                    <div className="website md:w-1/2 flex flex-col sm:justify-center lg:pr-16" data-atropos-offset="5">
                                        <h3>{websiteCard.title}</h3>
                                        <p className="text-[12px] mt-3">{websiteCard.description}</p>
                                        <div className="mt-6">
                                            {buttons}
                                        </div>
                                    </div>

                                    <div className="mt-10 sm:mt-0 xs:w-full xs:px-20 ss:px-32 ss:mt-0 sm:px-8 sm:ml-12 sm:-mt-10 md:w-1/2 md:ml-0 md:px-0">
                                        <img src={websiteCard.websiteImage} className={`${styles.websitesImg} -z-20 max-w-none -left-[30%] w-[140%] sm:absolute sm:left-[45%] sm:w-[48%] sm:top-[12%] lg:w-[47%] lg:top-[11%]`} data-atropos-offset="-7"/>

                                        <img src={websiteCard.phoneImage} className={`${styles.websitesImg} -z-10 -top-[40%] left-[57%] w-[70%] sm:absolute sm:left-[76%] sm:top-[36%] sm:w-[20%] lg:w-[22%] lg:top-[24%]`} data-atropos-offset="-5"/>
                                    </div>
                                </div>

                            </Atropos>                
        
                return website
            })
        })
    }, [currentProjNum])



    return(
        <div id="projects" className="my-28">
            <div className="flex items-center">
                <h2 className="flex items-center whitespace-nowrap w-full after:content-[''] after:ml-3 after:block after:relative after:top-1  after:w-full after:h-px after:bg-secondary"><span className="mr-1 text-aleRed">02.</span>Trabajo Destacado</h2>
                
                <div className="mt-2">
                    <IconArrowBadgeLeft size={30} onClick={()=>setWebsites(-1)} className="transition duration-200 text-secondary hover:text-aleRed cursor-pointer"/>
                </div>
                <div className="mt-2">
                    <IconArrowBadgeRight size={30} onClick={()=>setWebsites(1)} className="transition duration-200 text-secondary hover:text-aleRed cursor-pointer"/>
                </div>

            </div>
            <AnimatePresence wait>
                <motion.div
                        key={websitesCards ? currentProjNum.first : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.4}}
                    >
                    {websitesCards}
                </motion.div>

            </AnimatePresence>
        </div>
    )
}