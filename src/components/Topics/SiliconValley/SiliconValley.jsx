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
    fetchNow(
     { url: `https://content.guardianapis.com/technology/silicon-valley?search?from-date=${newsCtx.currentDate}&page-size=10&show-fields=body%2Cthumbnail%2CshouldHideAdverts%2Cheadline%2C&show-elements=image&show-blocks=all&show-tags=contributor&api-key=${import.meta.env.VITE_MY_API_KEY}`}
    )
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
      </div>
      }

      {status}

    </div>
  )
}

export default SiliconValley