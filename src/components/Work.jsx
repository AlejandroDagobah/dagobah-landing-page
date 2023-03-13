import React from "react";
import {work} from "../info";

export default function Work() {

    const [currentJob, setCurrentJob] = React.useState(work[0])
    console.log(currentJob, 'hola');

    const buttons = work.map((item)=>{
        return <button key={work.indexOf(item)} onClick={()=>changeInfo(item.company)} className="p-2 pl-3 text-md text-left font-bold font-crimsonPro w-full transition duration-150 active:bg-aleBlueLight active:text-aleBlue hover:bg-aleBlueLight hover:text-aleBlue">
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
        <div>
            
            <h2 className="flex items-center whitespace-nowrap w-full after:content-[''] after:ml-3 after:block after:relative after:top-1  after:w-full after:h-px after:bg-secondary"><span className="mr-1 text-aleRed">02.</span>Donde he trabajado</h2>
            <div className="flex my-6">
                <div className="flex-col">
                    {buttons}
                </div>
                <div className="pl-4">
                    <h3 className="">{`${currentJob.charge} en ${currentJob.company}`}</h3>
                    <p className="range py-4 font-sourceCodePro text-sm">{currentJob.date}</p>
                
                    <ul className="pl-4 marker:text-aleRed marker:text-lg list-outside list-disc">
                        {currentJob.points.map((item)=>{
    
                                return <li key={currentJob.points.indexOf(item)} className="pl-3 py-2">{item}</li>
                            })  
                        }
                    </ul>

                </div>
            </div>

            
        </div>
    )
}