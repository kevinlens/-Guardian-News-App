import React from 'react'

import styles from './Subhead_Aside_Lg_HeadingOnly.module.scss'

const Subhead_Aside_Lg_HeadingOnly = ({article}) => {
  
  return (
    <div className={styles.subhead}>
      {article &&
      <h3>{article.title}</h3>
      }
    </div>
  )
}

export default Subhead_Aside_Lg_HeadingOnly;