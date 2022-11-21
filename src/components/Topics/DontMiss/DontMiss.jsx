import React from 'react'
import styles from './DontMiss.module.scss';
import Subhead_Sm from '../../UI/Subhead/Subhead_Sm/Subhead_Sm';
import Line_Separator from '../../UI/Line_Separator/Line_Separator';
const DontMiss = () => {
  return (
    <div className={styles.dontMiss}>
      <div className={styles.dontMiss__separator_full}>
        <Line_Separator />
      </div>
      <div className={styles.dontMiss__topic}>
        Don't Miss
      </div>
      <Subhead_Sm />
      <div className={styles.dontMiss__column_border}></div>
      <Subhead_Sm />
      <div className={styles.dontMiss__column_border}></div>
      <Subhead_Sm />
      <div className={styles.dontMiss__column_border}></div>
      <Subhead_Sm />
    </div>
  )
}

export default DontMiss