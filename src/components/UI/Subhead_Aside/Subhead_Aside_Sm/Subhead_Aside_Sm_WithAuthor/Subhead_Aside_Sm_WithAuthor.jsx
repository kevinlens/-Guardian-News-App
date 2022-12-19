import React from 'react'
import { Link } from "react-router-dom"
import styles from './Subhead_Aside_Sm_WithAuthor.module.scss'

const Subhead_Aside_Sm_WithAuthor = ({article}) => {
  
  return (
    <Link to="/summary" className={styles.subhead} state={{ data: article }}>
      {article && 
      <div>
        <h3 className={styles.subhead__header}>{article.title}</h3>
        <p className={styles.subhead__author}>by {article.author}</p>
      </div>
      }
    </Link>
  )
}

export default Subhead_Aside_Sm_WithAuthor