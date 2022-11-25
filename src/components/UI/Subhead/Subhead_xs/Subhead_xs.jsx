import React from 'react'
import styles from './Subhead_xs.module.scss'

const Subhead_xs = (props) => {

  let content = '';

  if (props.data) {
    content = (
      <>
      <img className={styles.subhead__img} src={props.data.image} alt='example image' />
      <p className={styles.subhead__header}>{props.data.title}</p>
      <p className={styles.subhead__author}>by {props.data.author}</p>
      </>
    );
  }

  return (
    <div className={styles.subhead}>
      {content}
    </div>
  )
}

export default Subhead_xs 