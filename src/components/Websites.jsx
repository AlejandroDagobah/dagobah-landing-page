import React from "react";
import Atropos from "atropos/react";
import styles from "../style"
import {websites} from "../info";
import {projects} from "../info";
import { motion, AnimatePresence } from "framer-motion"

import {IconBrandGithub, IconExternalLink} from "@tabler/icons";


export default function Website() {

    const [currentProjNum, setCurrentProjNum] = React.useState({first:0, end:2})
    
    const [currentProject, setCurrentProject] = React.useState(projects[0])
    

    const buttons = projects.map((item)=>{
        
        let style

        if(item.title === currentProject.title){
            style = "text-aleBlue border-aleBlue"
            
        }else{
            style = "text-secondary"

        }

        return <button key={projects.indexOf(item)} onClick={()=>changeInfo(item.title)} className={`border-t-2 mb-px sm:border-t-0 sm:border-l-2 border-secondary/30 py-2 sm:mb-0 px-3 whitespace-nowrap sm:whitespace-normal text-md text-left font-bold font-crimsonPro transition duration-150 hover:bg-aleBlue/10 hover:text-aleBlue hover:border-aleBlue focus:border-aleBlue ${style}`}>
                {item.title}
            </button>
    })

    const projectsItems = currentProject.projects.map((item, i)=>{

        const tags = item.tags.map((tag)=>{
            return <p className="font-sourceCodePro text-sm">{tag}</p>

        })

        var division = i % 2;
        const isOddNum = division == 1 ? true : false
        const styleOpposite = 'sm:flex-row-reverse'
        
        return <div className={`relative flex flex-col justify-end border-secondary border-2 w-full min-h-[300px] mb-8 sm:mb-28 sm:flex-row sm:justify-center sm:border-0 ${isOddNum ? styleOpposite : ''}`}>
                    <div className={`flex flex-1 flex-col justify-center z-10 px-6 py-8 sm:px-0  ${isOddNum ? 'sm:items-end' : 'sm:-mr-20'}`}>
                        <span className="font-crimsonPro text-xl text-aleBlue">{item.subtitle}</span>
                        <h3 className="font-crimsonPro text-3xl mb-4 break-normal">{item.title}</h3>
                        <div className="sm:px-4 sm:py-6 sm:border-secondary sm:border-2 sm:rounded-md sm:bg-primary/60 md:backdrop-blur-md sm:drop-shadow-lg">
                            <p className={`text-sm break-normal ${isOddNum ? 'sm:text-end' : ''}`}>{item.description}</p>
                        </div>

                        <div className="flex gap-3 mt-4">
                            {tags}
                        </div>

                        <div className="flex gap-3 mt-3">
                            <a href={item.repoURL}><IconBrandGithub size={25} className="transition duration-200 text-secondary hover:text-aleRed cursor-pointer"/></a>
                            <a href={item.prodURL}><IconExternalLink size={25} className="transition duration-200 text-secondary hover:text-aleRed cursor-pointer"/></a>
                        </div>
                    </div>
                    <div className={`absolute t-0 h-full w-full sm:w-auto sm:h-auto sm:static sm:flex-1 ${isOddNum ? 'sm:-mr-20' : ''}`}>
                        <img className="h-full w-full object-cover backdrop-blur-md opacity-40 sm:backdrop-blur-none sm:opacity-100" src="./img/project-sample-img.jpg" alt="" />
                    </div>

                </div>

    })


    function changeInfo(title) {

        var indice = projects.findIndex((project)=>{
            return project.title === title
        })
        
        setCurrentProject(projects[indice])
        var navTab = document.getElementById('navTabProjWeb')

    }

    return(
        <div id="projects" className="mt-28">
            <div className="flex items-center">
                <h2 className="flex items-center whitespace-nowrap w-full after:content-[''] after:ml-3 after:block after:relative after:top-1  after:w-full after:h-px after:bg-secondary"><span className="mr-1 text-aleBlue">02.</span>Trabajo Destacado</h2>
                
            </div>
            
            <div className="flex flex-col py-12 sm:flex-row sm:justify-between">
                <div className="flex absolute left-px sm:left-0 sm:relative max-w-[100%] overflow-x-auto sm:overflow-x-hidden sm:flex-col sm:max-w-[150px]">
                    {buttons}
                </div>

                <div className="mt-28 sm:mt-0 sm:pl-16">
                    {projectsItems}
                   
                </div>

            </div>
        
        </div>
    )
}