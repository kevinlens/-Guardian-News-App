import React from 'react'

import styles from './Hot_News.module.scss';
import Subhead_Aside_Lg from '../../UI/Subhead_Aside/Subhead_Aside_Lg/Subhead_Aside_Lg';
import Subhead_Aside_Lg_v2 from '../../UI/Subhead_Aside/Subhead_Aside_Lg/Subhead_Aside_Lg_v2';
const Hot_News = () => {
  return (
    <div className={styles.Hot_News}>
      <Subhead_Aside_Lg isMainArticle='yes' />
      <Subhead_Aside_Lg />
      <Subhead_Aside_Lg />
      <Subhead_Aside_Lg_v2 />
    </div>
  )
}

export default Hot_News