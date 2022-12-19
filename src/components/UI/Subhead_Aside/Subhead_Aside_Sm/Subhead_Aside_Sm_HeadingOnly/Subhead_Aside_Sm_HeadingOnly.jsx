import React from 'react'
import { Link } from "react-router-dom"
import styles from './Subhead_Aside_Sm_HeadingOnly.module.scss'

const Subhead_Aside_Sm_HeadingOnly = ({article}) => {
  
  return (
    <Link to="/summary"  className={styles.subhead} state={{ data: article }}>
      {article && 
      <h3 className={styles.subhead__header}>{article.title}</h3>
      }
    </Link>
  )
}

export default Subhead_Aside_Sm_HeadingOnly