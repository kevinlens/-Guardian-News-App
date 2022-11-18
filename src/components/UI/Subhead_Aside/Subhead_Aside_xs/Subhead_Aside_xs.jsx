import React from 'react'
import styles from './Subhead_Aside_xs.module.scss'
import exampleImage from '../../../../assets/Images/imrs.jpg'
import Line_Separator from '../../Line_Separator/Line_Separator'
const Subhead_Aside_xs = () => {
  return (
    <div className={styles.subhead}>
      <p className={styles.subhead__header}>Biden has been granted a new lease on life</p>
      <img className={styles.subhead__img} src={exampleImage} alt='example image' />
      <p className={styles.subhead__author}>Opinion by Jennifer Rubin</p>
      <div className={styles.subhead__separator_lightgrey}>
        <Line_Separator lineColor='#e9e9e9' />
      </div>
    </div>
  )
}

export default Subhead_Aside_xs