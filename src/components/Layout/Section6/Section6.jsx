import React from 'react'
import styles from './Section6.module.scss';
import Politics from '../../Topics/Politics/Politics';
const Section6 = () => {

  let euNews = 'world/europe-news'

  return (
    <div className={styles.section6}>
    <Politics topic={{url: euNews, topic: 'EU News'}} />
    </div>
  )
}

export default Section6