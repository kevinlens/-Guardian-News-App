import React from 'react';

//THIRD-PARTY PACKAGES
import parse from 'html-react-parser';
import moment from 'moment';

//STYLING
import styles from './Summary.module.scss';

import { useLocation } from 'react-router-dom';
const Summary = (props) => {
  const location = useLocation();
  const data = location.state?.data;
  console.log(data);

  const dateString = data.dateCreated;
  const dateMoment = moment(dateString);
  const formattedDate = dateMoment.format('MMMM Do YYYY, h:mm a');

  return (
    <div className={styles.summary}>
      <h1>{data.title}</h1>
      <div className={styles.summary__caption}>{data.caption}</div>
      <div className={styles.summary__author}>By {data.author}</div>
      <div className={styles.summary__time}>{formattedDate}</div>
      <img
        className={styles.summary__img}
        src={data.image}
        alt='example image'
      />
      {parse(data.body)}
    </div>
  );
};

export default Summary;
