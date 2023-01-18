import React from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import About from "./components/About"
import Websites from './components/Websites'
import Others from './components/Others'
import Work from './components/Work'
import Contact from './components/Contact'

import styles from './style';

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
          
          <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero/>
            </div>
          </div>
          
          <div className={`${styles.flexStart}`}>

            <div className={`${styles.boxWidth}`}>
              <About/>
              <Websites/>
              <Others/>
              <Work/>
              <Contact/>
            </div>

          </div>
      </div>
    </div>
  );
}

export default App;
