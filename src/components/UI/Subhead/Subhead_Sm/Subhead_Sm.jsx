import React from 'react';
import styles from './Subhead_Sm.module.scss';

const Subhead_Sm = (props) => {
  let content = '';

  if (props.data) {
    content = (
      <>
        <img
          className={styles.subhead__img}
          src={props.data.image}
          alt='loading'
        />
        <p className={styles.subhead__header}>{props.data.title}</p>
        <p className={styles.subhead__author}>
          {props.data.author ? `by ${props.data.author}` : ''}
        </p>
      </>
    );
  }

  return <div className={styles.subhead}>{content}</div>;
};

export default Subhead_Sm;
