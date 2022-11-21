import React from 'react'
import styles from './Most_Read.module.scss';
import Subhead_Aside_Md from '../../UI/Subhead_Aside/Subhead_Aside_Md/Subhead_Aside_Md'
import Subhead_Aside_Sm_HeadingOnly from '../../UI/Subhead_Aside/Subhead_Aside_Sm/Subhead_Aside_Sm_HeadingOnly/Subhead_Aside_Sm_HeadingOnly';
import Line_Separator from '../../UI/Line_Separator/Line_Separator';
const Most_Read = () => {
  return (
    <div className={styles.most_read}>

      <div className={styles.most_read__separator_full}>
        <Line_Separator />
      </div>  

      <div className={styles.most_read__topic}>Most Read</div>

      <div className={styles.most_read__numberOne}>
        <h1 className={styles.most_read__numberOne_number}>1</h1>
        <Subhead_Aside_Md />
        <div className={styles.most_read__numberOne__column_border_1}></div>
      </div>

      <div className={styles.most_read__otherNumbers}> 

        <div className={styles.most_read__otherNumbers__2_3}>
          <h3 className={styles.most_read__otherNumbers__2_3__number}>2</h3>
          <Subhead_Aside_Sm_HeadingOnly />

          <div className={styles.most_read__otherNumbers__separator_quarter}>
              <Line_Separator lineColor='#e9e9e9' />
          </div>

          <h3 className={styles.most_read__otherNumbers__2_3__number}>3</h3>
          <Subhead_Aside_Sm_HeadingOnly />
        </div>
        <div className={styles.most_read__otherNumbers__column_border_2}></div>

        <div className={styles.most_read__otherNumbers__4_5}>
          <h3 className={styles.most_read__otherNumbers__4_5__number}>4</h3>
          <Subhead_Aside_Sm_HeadingOnly />

          <div className={styles.most_read__otherNumbers__separator_quarter}>
              <Line_Separator lineColor='#e9e9e9' />
          </div>

          <h3 className={styles.most_read__otherNumbers__4_5__number}>5</h3>
          <Subhead_Aside_Sm_HeadingOnly />
        </div>

      </div>

    </div>
  )
}

export default Most_Read