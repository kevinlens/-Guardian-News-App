import React from 'react'
import styles from './Subhead_Aside_Lg_v2.module.scss'


const Subhead_Aside_Lg_v2 = (props) => {

  let content = '';

  if (props.data) {
    content = (
      <>
      <div className={styles.subhead__header}>
        <h1>{props.data.title}</h1>
        <div className={styles.subhead__author}>By {props.data.author}</div>
      </div>
      <img className={styles.subhead__img} src={props.data.image} alt='example image' />
      <div className={styles.subhead__credit}>
        <p>{props.data.photographer}</p>
      </div>
      </>
    );
  }
  return (
    <div className={styles.subhead}>

{content}

    </div>
  )
}

export default Subhead_Aside_Lg_v2