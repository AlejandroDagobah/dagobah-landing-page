import React from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import About from "./components/About"
import Websites from './components/Websites'
import Others from './components/Others'
import Work from './components/Work'
import Contact from './components/Contact'
import styles from './style';
import FixedContact from './components/FixedContact'




function App() {
  

  return (
    <div className={`App`}>

      <div className={`content flex flex-col items-center`}>

          <Header/>

          
          <div className={`flex flex-row max-w-[1600px] lg:max-w-[1400px] sm:px-[5rem] md:px-[8rem] h-[95vh] mt-[3rem] justify-center`}>
            <Hero/>
          </div>
        
          <div className='flex-row'>



            <div className={`${styles.boxWidth} my-44 sm:pl-10 sm:pr-4 lg:px-36 px-4`}>
              <About/>
            </div>

            <div className={`${styles.boxWidth} my-44 sm:pl-10 sm:pr-4 px-3 md:px-36 lg:px-80`}>
              <Work/>
            </div>

            <div className={`${styles.boxWidth} px-3 sm:px-0 lg:px-36 px-4`}>
              <Websites/>
            </div>

            <div className={`${styles.boxWidth} my-44 sm:pl-10 sm:pr-4 px-3 md:px-36 lg:px-80`}>
              <Others/>
            </div>

            <div className={`${styles.boxWidth} px-3 sm:px-0 md:px-36 lg:px-52`}>       
              <Contact/>
            </div>
            

          </div>
      </div>

      <div>
        <FixedContact/>
      </div>
    </div>
  );
} 

export default App;
