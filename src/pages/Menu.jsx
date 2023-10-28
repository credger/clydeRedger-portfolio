import React from 'react'
import close from '../assets/close-white.svg'
import styles from './Menu.module.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import resume from '../../public/clyde-redger-resume.pdf'


const Menu = () => {

  let { state } = useLocation();

  let route
  if(state === null){
    route = '../'
  } else{
    route = state.replace('#/','../')
  }
       

  return (
    <div className={styles.menuContent}>
      <div className={styles.top}>

      <Link to='/' className={styles.link}>
        <div className={styles.logo}>
            <p className={styles.logoText}>CR</p>
        </div>
      </Link>  

        <Link to={route}>
            <img src={close} alt='close' height='40' width='40' />
        </Link>
      </div>

      <div className={styles.menu}>
        <Link to="../projects" className={styles.menuLink}>Projects</Link>
        <Link to="../about" className={styles.menuLink}>About</Link>
        <a href={resume} className={styles.menuLink}>Resume</a>
        <Link to="../contact" className={styles.menuLink}>Contact</Link>
      </div>

    </div>
  )
}

export default Menu
