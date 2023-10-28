import React from 'react'
import styles from './Home.module.css'
import Navbar from '../components/Navbar'
import reactLogo from '../assets/react.svg'
import javaScriptLogo from '../assets/javascript.svg'
import cssLogo from '../assets/css.svg'
import htmlLogo from '../assets/html.svg'


const Home = () => {

  return (
    <div>
      <Navbar />
      <div className={styles.homeContent}>
        <div className={styles.nameAndIcons}>
          <h1 className={styles.name}>Clyde Redger</h1>
          <h3 className={styles.title}>Front End Developer</h3>
          <div className={styles.logoContainer}>
            <a href='https://react.dev'>
              <img src={reactLogo} alt='react-logo' height="2500"  width="2194" className={styles.logo} />
            </a>
            <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'>
              <img src={htmlLogo} alt='html-logo' height="2500"  width="2183" className={styles.logo} />
            </a>
            <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>
              <img src={javaScriptLogo} alt='javaScript-logo' height="2500"  width="2183" className={styles.logo} />
            </a>
            <a href='https://developer.mozilla.org/en-US/docs/Web/CSS'>
              <img src={cssLogo} alt='css-logo' height="2500"  width="2183" className={styles.logo} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
