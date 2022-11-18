import React from 'react'
import styles from './Filler_Subhead_Aside_xs.module.scss'
import exampleImage from '../../../../../assets/Images/imrs.jpg'

const Filler_Subhead_Aside_xs  = () => {
  return (
    <div className={styles.subhead}>
      <p className={styles.subhead__header}>Biden has been granted a new lease on life</p>
      <img className={styles.subhead__img} src={exampleImage} alt='example image' />
    </div>
  )
}

export default Filler_Subhead_Aside_xs 