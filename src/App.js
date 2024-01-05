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
import { motion, Variants } from "framer-motion"

import ReactGA from 'react-ga'
import { useLocation } from 'react-router-dom';

ReactGA.initialize('G-26V5T383B8')



const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8
    }
  }
}

function App() {
  
  const location = useLocation();
  React.useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <div className={`App`}>

      <div className={`content flex flex-col items-center`}>

          <Header/>

            <div className={`flex flex-row max-w-[1600px] lg:max-w-[1400px]  sm:px-[5rem] md:px-[8rem] h-[95vh] mt-[3rem] justify-center`}>
              <Hero/>
            </div>

            <motion.div
                initial= {cardVariants.offscreen}
                whileInView={cardVariants.onscreen}
                viewport={{ once: true, amount: 0.5 }}
            className={`${styles.boxWidth} my-12 px-3 sm:pl-10 sm:pr-4 lg:px-36`}>
              <About/>
            </motion.div>

            <motion.div 
                initial= {cardVariants.offscreen}
                whileInView={cardVariants.onscreen}
                viewport={{ once: true, amount: 0.2 }}
                className={`${styles.boxWidth} px-3 sm:px-10 lg:px-36 my-14 w-full`}>
              <Websites/>
            </motion.div>

            <motion.div 
              initial= {cardVariants.offscreen}
              whileInView={cardVariants.onscreen}
              viewport={{ once: true, amount: 0.5 }}
            className={`${styles.boxWidth} my-32 sm:pl-10 sm:pr-4 px-3 md:px-36 lg:px-80`}>
              <Work/>
            </motion.div>

            <motion.div 
              initial= {cardVariants.offscreen}
              whileInView={cardVariants.onscreen}
              viewport={{ once: true, amount: 0.2 }}
              className={`max-w-[1000px] sm:pl-10 sm:pr-4 px-3`}>
              <Others/>
            </motion.div>

            <motion.div 
              initial= {cardVariants.offscreen}
              whileInView={cardVariants.onscreen}
              viewport={{ once: true, amount: 0.5 }}
              className={`${styles.boxWidth} px-3 sm:px-0 md:px-36 lg:px-52`}>       
              <Contact/>
            </motion.div>
     
      </div>

      <motion.div
          transition={{type: 'spring', delay:2}}
          initial={{opacity: 0 }}
          animate={{opacity: 1 }}
      >
        <FixedContact/>
      </motion.div>
    </div>
  );
} 

export default App;
