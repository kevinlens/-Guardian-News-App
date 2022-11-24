//HOOKS
import React, { useState, useEffect } from 'react';

//CUSTOM HOOKS
import useFetch from '../../../custom-hooks/useFetch';

//CONTEXT
import { useContext } from 'react';
import NewsContext from '../../../store/News-Context';

//STYLING
import styles from './Hot_News.module.scss';

//COMPONENTS
import Subhead_Aside_Lg from '../../UI/Subhead_Aside/Subhead_Aside_Lg/Subhead_Aside_Lg';
import Subhead_Aside_Lg_v2 from '../../UI/Subhead_Aside/Subhead_Aside_Lg/Subhead_Aside_Lg_v2';

const Hot_News = () => {
  const { data, isLoading, error, fetchNow } = useFetch();
  const newsCtx = useContext(NewsContext);
  useEffect(() => {
    fetchNow({
      url: `https://content.guardianapis.com/science?search?from-date=${newsCtx.currentDate}&page-size=10&show-fields=body%2Cthumbnail%2CshouldHideAdverts%2Cheadline%2C&show-elements=image&show-blocks=all&show-tags=contributor&api-key=${import.meta.env.VITE_MY_API_KEY}`,
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
      {!isLoading && !error && data && (
        <>
          <Subhead_Aside_Lg data={data[0]} isMainArticle='yes' />
          <Subhead_Aside_Lg data={data[1]} />
          <Subhead_Aside_Lg_v2 data={data[2]} />
        </>
      )}
      {status}
    </div>
  );
};

export default Hot_News;
