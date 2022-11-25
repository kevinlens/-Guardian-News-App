import React from 'react'
import styles from './Subhead_Aside_Lg.module.scss'
import Line_Separator from '../../Line_Separator/Line_Separator'

const Subhead_Aside_Lg = (props) => {

    let isMainArticle = false;
    let hasTopic = false
    if (props.isMainArticle) {
      isMainArticle = true;
    } else if (props.topic) {
      hasTopic = true
    }

    let content = '';

    if (props.data) {
      content = (
        <>
      <div className={styles.subhead__header}>
        <h1 style={isMainArticle ? {fontSize: 40, fontWeight: 'bold'} : {}} >{props.data.title}</h1>
        
        <p>The GOP’s disappointing midterm results spur some donors and party leaders to consider other 2024 candidates.</p>
        <div className={styles.subhead__author}>By Ashley Parker, Josh Dawsey and Michael Scherer</div>
      </div>

      <img className={styles.subhead__img} src={props.data.image} alt='loading' />

      <div className={styles.subhead__credit}>
        <p>{props.data.photographer}</p>
      </div>
        </>
      );
    }
  

  return (
    <div className={styles.subhead}>
      <div className={styles.subhead__topic}>
      <Line_Separator />
      </div>
      {hasTopic && (
        <div className={styles.subhead__topic}>
          <p>{props.topic}</p>
        </div>
      )}

      <div className={styles.subhead__filler}></div>
        {content}
    </div>
  )
}

export default Subhead_Aside_Lg