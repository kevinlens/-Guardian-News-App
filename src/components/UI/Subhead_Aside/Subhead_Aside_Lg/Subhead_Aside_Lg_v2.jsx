import React from 'react'
import styles from './Subhead_Aside_Lg_v2.module.scss'
import exampleImage from '../../../../assets/Images/imrs2.jpg'


const Subhead_Aside_Lg_v2 = () => {

  return (
    <div className={styles.subhead}>
      <div className={styles.subhead__header}>
        <h1>Republican rivals start considering a post-Trump future</h1>
        <div className={styles.subhead__author}>By Ashley Parker, Josh Dawsey and Michael Scherer</div>
      </div>
      <img className={styles.subhead__img} src={exampleImage} alt='example image' />
      <div className={styles.subhead__credit}>
      </div>
    </div>
  )
}

export default Subhead_Aside_Lg_v2