import React from 'react'
import Navbar from '../components/Navbar'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.contactContent}>
        <div className={styles.text}>
            <p>Clyde Redger</p>
            <p>clyde.webdev@gmail.com</p>
            <p>539-842-0296</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
