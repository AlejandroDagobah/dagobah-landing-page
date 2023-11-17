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
  
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className={`App`}>

      <div className={`content ${styles.paddingX}`}>
        <div className={`${styles.flexStart}`}>

            <div className={`${styles.boxWidth}`}>
              <Header toggle={toggleMenu} setToggle={setToggleMenu}/>
            </div>

          </div>
          
          <div className='justify-between'>
            <div className={`${styles.boxWidth + styles.boxPaddingX} my-14`}>
              <Hero/>
            </div>
          </div>
          
          <div>



            <div className={`${styles.boxWidth} my-44 sm:pl-10 sm:pr-4 lg:px-36 px-4`}>
              <About/>
            </div>

            <div className={`${styles.boxWidth} my-44 sm:pl-10 sm:pr-4 px-3 md:px-36 lg:px-80`}>
              <Work/>
            </div>

            <div className={`${styles.boxWidth} px-3 sm:px-0 md:px-36 lg:px-52`}>
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
