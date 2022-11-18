import React from 'react'
import Subhead_Aside_xs from '../../UI/Subhead_Aside/Subhead_Aside_xs/Subhead_Aside_xs'
import styles from './Opinions.module.scss'
import Line_Separator from '../../UI/Line_Separator/Line_Separator'
const Opinions = () => {
  return (
    <div className={styles.topic}>
      <div className={styles.topic__separator_black}>
        <Line_Separator />
      </div>
      <h2 className={styles.topic__opinion}>Opinions</h2>
      <Subhead_Aside_xs />
      <Subhead_Aside_xs />
      <Subhead_Aside_xs />
      <Subhead_Aside_xs />
      <Subhead_Aside_xs />
      <Subhead_Aside_xs />
      <Subhead_Aside_xs />
      <Subhead_Aside_xs />
    </div>
  )
}

export default Opinions