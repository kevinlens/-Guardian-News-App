//HOOKS
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
//CUSTOM HOOKS
import useFetch from '../../../custom-hooks/useFetch';

//CONTEXT
import { useContext } from 'react';
import NewsContext from '../../../store/News-Context';

//STYLING
import styles from './Headline.module.scss';

//COMPONENTS
import Line_Separator from '../../UI/Line_Separator/Line_Separator';

const Headline = () => {
  const { data, isLoading, error, fetchNow } = useFetch();
  const newsCtx = useContext(NewsContext);
  useEffect(() => {
    fetchNow({category: 'us-news'});
  }, [fetchNow]);

  let status = '';

  if (isLoading) {
    status = <p>LOADING</p>;
  } else if (error) {
    status = <p>{error}</p>;
  }
  let articleInfo = '';
  if(!isLoading && !error && data){
    articleInfo = data[0];
  }


  return (
    <Link to="/summary" className={styles.headline} state={{ data: articleInfo }}>
      <Line_Separator />
      {!isLoading && !error && data && (
        <>
          <h1>{data[0].title}</h1>
          <p>{data[0].caption}</p>
        </>
      )}
      {status}
    </Link>
  );
};

export default Headline;
