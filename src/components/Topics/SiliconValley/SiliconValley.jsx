//HOOKS
import React, { useState, useEffect } from 'react';

//CUSTOM HOOKS
import useFetch from '../../../custom-hooks/useFetch';

//CONTEXT
import { useContext } from 'react';
import NewsContext from '../../../store/News-Context';

//STYLING
import styles from './SiliconValley.module.scss'

//COMPONENTS
import Subhead_Aside_xs from '../../UI/Subhead_Aside/Subhead_Aside_xs/Subhead_Aside_xs'
import Line_Separator from '../../UI/Line_Separator/Line_Separator'

const SiliconValley = () => {

  const { data, isLoading, error, fetchNow} = useFetch();
  const newsCtx = useContext(NewsContext);
  useEffect(() => {
    fetchNow({category: 'technology/silicon-valley'});
  }, [fetchNow]);

  let status = '';

  if (isLoading) {
    status = <p>LOADING</p>;
  } else if (error) {
    status = <p>{error}</p>;
  }

  return (
    <div className={styles.topic}>

      <div className={styles.topic__separator_black}>
        <Line_Separator />
      </div>

      <h2 className={styles.topic__siliconValley}>Silicon Valley</h2>
      
      {!isLoading && !error && data &&
      <div className={styles.topic__articles}>      
        <Subhead_Aside_xs article={data[0]} />
        <Subhead_Aside_xs article={data[1]} />
        <Subhead_Aside_xs article={data[2]} />
        <Subhead_Aside_xs article={data[3]} />
        <Subhead_Aside_xs article={data[4]} />
        <Subhead_Aside_xs article={data[5]} />
        <Subhead_Aside_xs article={data[6]} />
        <Subhead_Aside_xs article={data[7]} />
      </div>
      }

      {status}

    </div>
  )
}

export default SiliconValley