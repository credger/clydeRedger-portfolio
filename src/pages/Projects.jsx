import React from 'react'
import Navbar from '../components/Navbar'
import styles from './Projects.module.css'
import invoiceApp from '../assets/invoice-app.webp'
import photosnap from '../assets/photosnap.webp'
import canvasAnimation from '../assets/canvas-animation.webp'
import ScrollToTop from '../components/ScrollToTop'

const Projects = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <div className={styles.cards}>
          <div className={styles.box}>
            <div className={styles.imageContainer}>
              <a href='https://credger.github.io/invoice-app/'  className={styles.imageLink}>
                <img src={invoiceApp} width='4' height='3' className={styles.screenshot} />
              </a>
            </div>
            <div className={styles.textContainer}>
              <div className={styles.text}>
                <h3 className={styles.heading}>Invoice App</h3>
                <p className='marginBottom16px'>Web application that allowers users to create, edit, copy, and delete invoices.  
                  Features light and dark themes, form validation, and custom drop-down menus.  Design by <a href='https://www.frontendmentor.io/' className={styles.paragraphLink}>Front End Mentor</a>.
                </p>
              </div>
              <div className={styles.linkContainer}>
                <a href='https://credger.github.io/invoice-app/' className={styles.link}>View Site</a>
                <a href='https://github.com/credger/invoice-app' className={styles.link}>View Code</a>
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.imageContainer}>
            <a href='https://credger.github.io/photosnap/'  className={styles.imageLink}>
                <img src={photosnap} width='4' height='3' className={styles.screenshot} />
              </a>
            </div>
            <div className={styles.textContainer}>
              <div className={styles.text}>
                <h3 className={styles.heading}>Photosnap</h3>
                <p className='marginBottom16px'>Sleek multi-page marketing website for a fictional photosharing service.  
                  Responsive layout that looks great on any screen.  Design by <a href='https://www.frontendmentor.io/' className={styles.paragraphLink}>Front End Mentor</a>.
                </p>
              </div>
              <div className={styles.linkContainer}>
                <a href='https://credger.github.io/photosnap/' className={styles.link}>View Site</a>
                <a href='https://github.com/credger/photosnap' className={styles.link}>View Code</a>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.imageContainer}>
            <a href='https://credger.github.io/creativeBrandDesign-heroClone/'  className={styles.imageLink}>
                <img src={canvasAnimation} width='4' height='3' className={styles.screenshot} />
              </a>
            </div>
            <div className={styles.textContainer}>
              <div className={styles.text}>
                <h3 className={styles.heading}>Canvas Animation</h3>
                <p className='marginBottom16px'>An eye-catching 2D canvas animation.  I stumbled across this animation by <a href='https://www.cbwebsitedesign.co.uk/' className={styles.paragraphLink}>Creative Brand Design </a>
                  and decided to recreate it from scratch.
                </p>
              </div>
              <div className={styles.linkContainer}>
                <a href='https://credger.github.io/creativeBrandDesign-heroClone/' className={styles.link}>View Site</a>
                <a href='https://github.com/credger/creativeBrandDesign-heroClone' className={styles.link}>View Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Projects
