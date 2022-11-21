import React from 'react'
import styles from './Politics.module.scss'
import Line_Separator from '../../UI/Line_Separator/Line_Separator'
import Subhead_Lg from '../../UI/Subhead/Subhead_Lg/Subhead_Lg'
import Subhead_Sm from '../../UI/Subhead/Subhead_Sm/Subhead_Sm'

const Politics = () => {
  return (
    <div className={styles.politics} >

      <div className={styles.politics__separator_full}>
        <Line_Separator />
      </div>  

      <div className={styles.politics__topic}>
        Politics
      </div>

      <div className={styles.politics__block_1}>
        <Subhead_Lg />
        <div className={styles.politics__column_border_1}></div>
      </div>

      <div className={styles.politics__block_2}>
        <div className={styles.politics__block_2__row_1}>
          <Subhead_Sm />
          <div className={styles.politics__separator_quarter}>
          <Line_Separator lineColor='#e9e9e9' />
          </div>
          <Subhead_Sm />
        </div>
        <div className={styles.politics__column_border_2}></div>
        <div className={styles.politics__block_2__row_2}>
          <Subhead_Sm />
          <div className={styles.politics__separator_quarter}>
          <Line_Separator lineColor='#e9e9e9' />
          </div>
          <Subhead_Sm />
        </div>
      </div>

    </div>
  )
}

export default Politics
