import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import resume from '../../public/clyde-redger-resume.pdf'
import menu from '../assets/burger-menu-white.svg'


const Navbar = () => {


  return (
    <div className={styles.navbar}>
      <Link to='/' className={styles.link}>
        <div className={styles.logo}>
            <p className={styles.logoText}>CR</p>
        </div>
      </Link>  



      <div className={styles.menu}>
        <Link to="../projects" className={styles.menuLink}>Projects</Link>
        <Link to="../about" className={styles.menuLink}>About</Link>
        <a href={resume} className={styles.menuLink}>Resume</a>
        <Link to="../contact" className={styles.menuLink}>Contact</Link>
      </div>

      <Link to="../menu" state={window.location.hash} className={styles.iconLink}>
        <img src={menu} width='40' height='40' alt='menu-icon' className={styles.icon} />
      </Link>
    </div>
      
  )
}

export default Navbar
