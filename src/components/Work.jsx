import React from "react";
import {work} from "../info";

export default function Work() {

    const [currentJob, setCurrentJob] = React.useState(work[0])

    const buttons = work.map((item)=>{
        
        let style

        if(item.company == currentJob.company){
            style = "py-2 px-3 whitespace-nowrap text-md text-left font-bold font-crimsonPro w-full transition duration-150  bg-aleBlueLight text-aleBlue"
            
        }else{
            style = "py-2 px-3 whitespace-nowrap text-md text-left font-bold font-crimsonPro w-full transition duration-150 bg-primary text-secondary hover:bg-aleBlueLight hover:text-aleBlue"

        }

        return <button key={work.indexOf(item)} onClick={()=>changeInfo(item.company)} className={`${style}`}>
                {item.company}
            </button>
    })

    function changeInfo(company) {

        var indice = work.findIndex((job)=>{
            return job.company == company
        })
        console.log(work[indice]);
        setCurrentJob(work[indice])
        
        
    }

    
    return(
        <div id="work">
            
            <h2 className="flex items-center whitespace-nowrap w-full after:content-[''] after:ml-3 after:block after:relative after:top-1  after:w-full after:h-px after:bg-secondary"><span className="mr-1 text-aleRed">02.</span>Donde he trabajado</h2>
            <div className="flex my-6 flex-wrap	sm:flex-nowrap">
                <div className="flex-col basis-full mb-6 sm:basis-1/4 pr-4">
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