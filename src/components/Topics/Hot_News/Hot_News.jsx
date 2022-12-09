//HOOKS
import React, { useState, useEffect } from 'react';

//CUSTOM HOOKS
import useFetch from '../../../custom-hooks/useFetch';
import useMediaQuery from '../../../custom-hooks/useMediaQuery';

//CONTEXT
import { useContext } from 'react';
import NewsContext from '../../../store/News-Context';

//STYLING
import styles from './Hot_News.module.scss';

//COMPONENTS
import Subhead_Aside_Lg from '../../UI/Subhead_Aside/Subhead_Aside_Lg/Subhead_Aside_Lg';
import Subhead_Aside_Lg_v2 from '../../UI/Subhead_Aside/Subhead_Aside_Lg/Subhead_Aside_Lg_v2';
import Subhead_Lg from '../../UI/Subhead/Subhead_Lg/Subhead_Lg'
import Line_Separator from '../../UI/Line_Separator/Line_Separator';

const Hot_News = () => {
  const { data, isLoading, error, fetchNow } = useFetch();
  //$bp-small: 43.75em;
  const isDesktop = useMediaQuery('(max-width: 43.75em)');

  const newsCtx = useContext(NewsContext);
  useEffect(() => {
    fetchNow({
      url: `https://content.guardianapis.com/food?search?from-date=${newsCtx.currentDate}&page-size=10&show-fields=body%2Cthumbnail%2CshouldHideAdverts%2Cheadline%2C&show-elements=image&show-blocks=all&show-tags=contributor&api-key=${import.meta.env.VITE_MY_API_KEY}`,
    });
  }, [fetchNow]);

  let status = '';

  if (isLoading) {
    status = <p>LOADING</p>;
  } else if (error) {
    status = <p>{error}</p>;
  }

  return (
    <div className={styles.Hot_News}>
      {!isLoading && !error && data && (!isDesktop) &&  (
        <>
          <Subhead_Aside_Lg article={data[0]} topic='Recipes' isMainArticle='yes' />    
          <Subhead_Aside_Lg article={data[1]} />
          <Subhead_Aside_Lg_v2 article={data[5]} />
        </>
      )}
      {!isLoading && !error && data && (isDesktop) && (
        <>
          <Subhead_Lg article={data[0]}/>
          <div className={styles.Hot_News__separator}>
            <Line_Separator lineColor='#080808' />
          </div>        
          <Subhead_Lg article={data[1]}/>
          <div className={styles.Hot_News__separator}>
            <Line_Separator lineColor='#080808' />
          </div>  
          <Subhead_Lg article={data[2]}/>

        </>
      )}
      {status}
    </div>
  );
};

export default Hot_News;
