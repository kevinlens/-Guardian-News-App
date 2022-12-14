import React from 'react'

import styles from './Subhead_Aside_Sm_WithAuthor.module.scss'

const Subhead_Aside_Sm_WithAuthor = ({article}) => {
  
  return (
    <div className={styles.subhead}>
      {article && 
      <div>
        <h3 className={styles.subhead__header}>{article.title}</h3>
        <p className={styles.subhead__author}>by {article.author}</p>
      </div>
      }
    </div>
  )
}

export default Subhead_Aside_Sm_WithAuthor