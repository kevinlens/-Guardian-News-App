import React from 'react'

import styles from './Subhead_Aside_Sm.module.scss'
import exampleImage from '../../../../assets/Images/imrs4.jpg'

const Subhead_Aside_Sm = () => {
  return (
    <div className={styles.subhead}>
      <h3 className={styles.subhead__header}>Biden has been granted a new lease on life</h3>
      <img className={styles.subhead__img} src={exampleImage} alt='example image' />
      <p className={styles.subhead__author}>Opinion by Jennifer Rubin</p>
    </div>
  )
}

export default Subhead_Aside_Sm