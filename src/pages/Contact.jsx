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
            <a href='tel:5398420296' className={styles.telephoneLink}>539-842-0296</a>
        </div>
      </div>
    </div>
  )
}

export default Contact
