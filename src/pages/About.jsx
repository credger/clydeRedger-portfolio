import React from 'react'
import Navbar from '../components/Navbar'
import styles from './About.module.css'
import rightArrowWhite from '../assets/right-arrow-white.svg'
import resume from '../../public/clyde-redger-resume.pdf'
import { Link } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'



const About = () => {

  return (
      <div>
        <ScrollToTop />
        <Navbar />
        <div className={styles.aboutContent}>
          <div className={`${styles.box} ${styles.box1}`}>
            <h3 className={styles.heading}>Background</h3>
            <p className={styles.text}>
              Studied physics and seismology in college.  Worked as a petroleum seismologist for 
              6 years in the oil and gas industry.  Lost job in 2021 due to layoffs. 
              Spent gap period as full-time parent, part-time farmer, and self-directed web develeopment student.
            </p>
            <a href={resume} className={styles.arrowLink}>
              <p>View Resume</p>
              <img src={rightArrowWhite} height='14' width='44' alt='right-arrow' className={styles.arrow} />
            </a>
          </div>
          <div className={`${styles.box} ${styles.box2}`}>
            <h3 className={styles.heading}>Skills</h3>
            <p className={styles.text}>
              Primary focus is on front end development using React, vanilla JavaScript, and plain CSS.  
              Special interests include canvas animations and advanced CSS techniques.  Capable of building backends
              with Node.js and Express.
            </p>
            <Link to='../projects' className={styles.arrowLink}>
              <p>View Projects</p>
              <img src={rightArrowWhite} height='14' width='44' alt='right-arrow' className={styles.arrow} />
            </Link>
          </div>
          <div className={`${styles.box} ${styles.box3}`}>
            <h3 className={styles.heading}>Seeking</h3>
            <p className={styles.text}>
              Full-time or contractor positions.  Remote preferred. 
            </p>
            <Link to='../contact' className={styles.arrowLink}>
              <p>Contact</p> 
              <img src={rightArrowWhite} height='14' width='44' alt='right-arrow' className={styles.arrow} />
            </Link>
          </div>

          <svg className={`${styles.line} ${styles.line1}`}>
            <line x1="0" y1="0" x2='100%' y2="100%" />
          </svg>

          <svg className={`${styles.line} ${styles.line2}`}>
            <line x1="100%" y1="0%" x2='0%' y2="100%" />
          </svg>

        </div>
    </div>
  )
}

export default About


