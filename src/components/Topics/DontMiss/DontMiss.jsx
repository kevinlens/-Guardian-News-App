//HOOKS
import React, { useState, useEffect } from 'react';

//CUSTOM HOOKS
import useFetch from '../../../custom-hooks/useFetch';

//CONTEXT
import { useContext } from 'react';
import NewsContext from '../../../store/News-Context';

//STYLING
import styles from './DontMiss.module.scss';

//COMPONENTS
import Subhead_Sm from '../../UI/Subhead/Subhead_Sm/Subhead_Sm';
import Subhead_Lg from '../../UI/Subhead/Subhead_Lg/Subhead_Lg';
import Line_Separator from '../../UI/Line_Separator/Line_Separator';

const DontMiss = () => {
  const { data, isLoading, error, fetchNow } = useFetch();
  const newsCtx = useContext(NewsContext);
  useEffect(() => {
    fetchNow({category: 'environment/food'});
  }, [fetchNow]);

  let status = '';

  if (isLoading) {
    status = <p>LOADING</p>;
  } else if (error) {
    status = <p>{error}</p>;
  }

  let fullSizedWidthContent = '';
  let largestSizedWidthContent = '';
  if (!isLoading && !error && data) {
    fullSizedWidthContent = (
      <>
        <div className={styles.dontMiss__separator_full}>
          <Line_Separator />
        </div>
        <div className={styles.dontMiss__topic}>Don't Miss</div>
        <div className={styles.dontMiss__fullSized_articles}>
          <Subhead_Sm article={data[0]} />
          <Subhead_Sm article={data[1]} />
          <Subhead_Sm article={data[2]} />
          <Subhead_Sm article={data[3]} />
        </div>
      </>
    );
    largestSizedWidthContent = (
      <div className={styles.dontMiss__largestSized_articles}>
        <Subhead_Lg article={data[0]} />
        <Subhead_Lg article={data[1]} />
        <Subhead_Lg article={data[2]} />
        <Subhead_Lg article={data[5]} />
      </div>
    );
  }

  return (
    <div className={styles.dontMiss}>
      {fullSizedWidthContent}
      {largestSizedWidthContent}
    </div>
  );
};

export default DontMiss;
