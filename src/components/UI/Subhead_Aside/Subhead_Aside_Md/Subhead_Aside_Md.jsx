import React from 'react'

import styles from './Subhead_Aside_Md.module.scss'
import exampleImage from '../../../../assets/Images/imrs7.jpg'

const Subhead_Aside_Md = () => {
  return (
    <div className={styles.subhead}>
      <h3 className={styles.subhead__header}>Live updates: Suspect in deadly LGBTQ club shooting was subdued by people in Colorado club</h3>
      <p className={styles.subhead__description}>Video from inside the GOP war room in Arizona reveals a breakdown in relations between campaign attorneys and a top lawyer for the county.</p>
      <img className={styles.subhead__img} src={exampleImage} alt='example image' />
    </div>
  )
}

export default Subhead_Aside_Md