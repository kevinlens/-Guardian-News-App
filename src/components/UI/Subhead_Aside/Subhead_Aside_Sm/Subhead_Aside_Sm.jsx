import React from 'react'

import styles from './Subhead_Aside_Sm.module.scss'

const Subhead_Aside_Sm = ({article}) => {
  let content = '';

if (article) {
  content = (
    <>
      <div>
        <h3 className={styles.subhead__header}>{article.title}</h3>
        <p className={styles.subhead__author}>by {article.author}</p>
      </div>
      <img className={styles.subhead__img} src={article.image} alt='example image' />
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