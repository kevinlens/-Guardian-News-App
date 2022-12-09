import React from 'react'
import styles from './Subhead_Aside_Lg.module.scss'
import Line_Separator from '../../Line_Separator/Line_Separator'

const Subhead_Aside_Lg = ({article, isMainArticle, topic}) => {

    let mainArticle = false;
    let hasTopic = false
    if (isMainArticle) {
      mainArticle = true;
    }
    if (topic) {
      hasTopic = true
    }

    let content = '';

    if (article) {
      content = (
        <>
      <div>
        <h1 className={styles.subhead__header} style={mainArticle ? {fontSize: 40 } : {}} >{article.title}</h1>
        
        <p>{article.caption}</p>
        <div className={styles.subhead__author}>By {article.author}</div>
      </div>

      <img className={styles.subhead__img} src={article.image} alt='loading' />

      <div className={styles.subhead__credit}>
        <p>{article.photographer}</p>
      </div>
        </>
      );
    }
  

  return (
    <div className={styles.subhead}>
      <div className={styles.subhead__separator}>
        <Line_Separator />
      </div>
      {hasTopic && (
        <div className={styles.subhead__topic}>
          {topic}
        </div>
      )}

      <div className={styles.subhead__filler}></div>
        {content}
        
    </div>
  )
}

export default Subhead_Aside_Lg