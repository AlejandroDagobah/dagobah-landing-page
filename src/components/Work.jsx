import React from "react";
import {work} from "../info";

export default function Work() {

    const [currentJob, setCurrentJob] = React.useState(work[0])

    const buttons = work.map((item)=>{
        
        let style

        if(item.company === currentJob.company){
            style = "text-aleRed"
            
        }else{
            style = " text-secondary"

        }

        return <button key={work.indexOf(item)} onClick={()=>changeInfo(item.company)} className={`border-l-2 border-secondary/30 py-2 px-3 whitespace-nowrap text-md text-left font-bold font-crimsonPro w-full transition duration-150 hover:bg-aleRed/10 hover:text-aleRed ${style}`}>
                {item.company}
            </button>
    })

    

    function changeInfo(company) {

        var indice = work.findIndex((job)=>{
            return job.company === company
        })
        
        setCurrentJob(work[indice])
        var navTab = document.getElementById('navTab')

        navTab.style.transform = `translate(0, ${indice * 40}px)`        
    }

    
    return(
        <div id="work">
            
            <h2 className="flex items-center whitespace-nowrap w-full after:content-[''] after:ml-3 after:block after:relative after:top-1  after:w-full after:h-px after:bg-secondary"><span className="mr-1 text-aleRed">02.</span>Donde he trabajado</h2>
            <div className="flex my-6 flex-wrap	sm:flex-nowrap">
                <div className="flex-col basis-full mb-6 sm:basis-1/4 pr-4">
                    <div id="navTab" className="tab absolute w-[2px] h-[40px] bg-aleRed rounded-lg transition-all ease-in-out duration-150 delay-200  translate-y-0"></div>
                    {buttons}
                </div>
                <div className="flex-col basis-full sm:basis-3/4 pl-4">
                    <h3 className="">{`${currentJob.charge} en `} <a className="text-aleRed" href={currentJob.url && currentJob.url}>{currentJob.company}</a></h3>
                    <p className="range py-4 font-sourceCodePro text-sm">{currentJob.date}</p>
                
                    <ul className="pl-4 marker:text-aleRed marker:text-lg list-outside list-disc">
                        {currentJob.points.map((item)=>{
    
                                return <li key={currentJob.points.indexOf(item)} className="pl-3 py-2" dangerouslySetInnerHTML={{__html:item}}></li>
                            })  
                        }
                    </ul>

                </div>
            </div>

            
        </div>
    )
}