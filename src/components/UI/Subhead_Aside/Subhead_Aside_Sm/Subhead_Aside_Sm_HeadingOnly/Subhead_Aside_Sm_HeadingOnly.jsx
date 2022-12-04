import React from 'react'

import styles from './Subhead_Aside_Sm_HeadingOnly.module.scss'

const Subhead_Aside_Sm_HeadingOnly = ({article}) => {
  
  return (
    <div className={styles.subhead}>
      {article && 
      <h3 className={styles.subhead__header}>{article.title}</h3>
      }
    </div>
  )
}

export default Subhead_Aside_Sm_HeadingOnly