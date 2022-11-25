import React from 'react'

import styles from './Subhead_Aside_Sm.module.scss'

const Subhead_Aside_Sm = (props) => {
  let content = '';

if (props.data) {
  content = (
    <>
      <h3 className={styles.subhead__header}>{props.data.title}</h3>
      <img className={styles.subhead__img} src={props.data.image} alt='example image' />
      <p className={styles.subhead__author}>{props.data.author}</p>
    </>
  );
}
  return (
    <div className={styles.subhead}>
      {content}
    </div>
  )
}

export default Subhead_Aside_Sm