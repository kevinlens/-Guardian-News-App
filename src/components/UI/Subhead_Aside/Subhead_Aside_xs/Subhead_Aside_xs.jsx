import React from 'react';
import styles from './Subhead_Aside_xs.module.scss';
import exampleImage from '../../../../assets/Images/imrs.jpg';
import Line_Separator from '../../Line_Separator/Line_Separator';

const Subhead_Aside_xs = (props) => {
  let content = '';

  if (props.data) {
    content = (
      <>
        <p className={styles.subhead__header}>
          {props.data.title}
        </p>
        <img
          className={styles.subhead__img}
          src={props.data.image}
          alt='example image'
        />
        <p className={styles.subhead__author}>Opinion by Jennifer Rubin</p>
      </>
    );
  }

  return (
    <div className={styles.subhead}>
      {content}
      <div className={styles.subhead__separator_lightgrey}>
        <Line_Separator lineColor='#e9e9e9' />
      </div>
    </div>
  );
};

export default Subhead_Aside_xs;
