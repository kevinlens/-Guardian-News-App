import React from 'react'
import styles from './Section4.module.scss';
import Politics from '../../Topics/Politics/Politics';

const Section4 = () => {

  let usNews = 'us-news'

  return (
    <div className={styles.section4}>
      <Politics topic={{url: usNews, topic: 'US News'}} />
    </div>
  )
}

export default Section4
