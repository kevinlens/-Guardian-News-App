import React from 'react'
import styles from './Section2.module.scss';
import Subhead_Aside_Lg from '../../UI/Subhead_Aside/Subhead_Aside_Lg/Subhead_Aside_Lg';
import Subhead_xs from '../../UI/Subhead/Subhead_xs/Subhead_xs';
import Line_Separator from '../../UI/Line_Separator/Line_Separator';
import Subhead_Aside_Sm from '../../UI/Subhead_Aside/Subhead_Aside_Sm/Subhead_Aside_Sm';

const Section2 = () => {
  return (
    <div className={styles.section2}>

      <div className={styles.section2__separator_full}>
        <Line_Separator lineColor='#e9e9e9' />
      </div>

      <div>

        <div className={styles.section2__two_articles}>
          <Subhead_Aside_Sm />
          <div className={styles.section2__column_border}></div>
          <Subhead_Aside_Sm />
        </div>

        <Subhead_Aside_Lg topic='immigration' />
        <Subhead_Aside_Lg />
      </div>

      <div className={styles.section2__mini_articles}>
        <Subhead_xs />
        <div className={styles.section2__separator_quarter}>
          <Line_Separator lineColor='#000000' />
        </div>
        <Subhead_xs />
        <div className={styles.section2__separator_quarter}>
          <Line_Separator lineColor='#000000' />
        </div>
        <Subhead_xs />
      </div>

    </div>
  )
}

export default Section2