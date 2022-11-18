import React from 'react';
import styles from './HorizontalNewsofFour.module.scss';
import Filler_Subhead_Aside_xs from '../../UI/Subhead_Aside/Subhead_Aside_xs/Filler_Subhead_Aside_xs/Filler_Subhead_Aside_xs';
const HorizontalNewsofFour = () => {
  return (
    <div className={styles.horizontalNewsofFour}>
      <Filler_Subhead_Aside_xs />
      <div className={styles.horizontalNewsofFour__column_border}></div>
      <Filler_Subhead_Aside_xs />
      <div className={styles.horizontalNewsofFour__column_border}></div>
      <Filler_Subhead_Aside_xs />
      <div className={styles.horizontalNewsofFour__column_border}></div>
      <Filler_Subhead_Aside_xs />
    </div>
  );
};

export default HorizontalNewsofFour;
