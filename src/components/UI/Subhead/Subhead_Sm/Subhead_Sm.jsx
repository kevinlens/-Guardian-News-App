import React from 'react'
import styles from './Subhead_Sm.module.scss'
import exampleImage from '../../../../assets/Images/imrs5.jpg'

const Subhead_Sm = () => {
  return (
    <div className={styles.subhead}>
      <img className={styles.subhead__img} src={exampleImage} alt='example image' />
      <p className={styles.subhead__header}>Ticketmaster suspends Taylor Swift ticket sales Friday after chaotic rollout</p>
      <p className={styles.subhead__author}>by Jennifer Rubin</p>
    </div>
  )
}

export default Subhead_Sm