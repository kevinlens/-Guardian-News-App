import React, { useState, useCallback, useEffect } from 'react';
//CONTEXT
import { useContext } from 'react';
import NewsContext from '../store/News-Context';

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  //get current date
  const newsCtx = useContext(NewsContext);


  const fetchNow = useCallback(async (requestConfig) => {
    setIsLoading(true);
    setError(null);

    try {

      const response = await fetch(`/.netlify/functions/fetch-news?currentDate=${newsCtx.currentDate}&category=${requestConfig.category}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const newsData = data.response.results.map((newsData) => {

        const img = new Image();
        if(newsData.blocks.main.elements){
          img.src = newsData.blocks.main.elements[0].assets[3]
          img.onload = () => {
            setDimensions({ width: img.width, height: img.height });
          };
          console.log('🍇🍇🍇🍇',newsData.blocks.main.elements[0].assets[3], dimensions)
        }
        
        let author = '';
        if (newsData.tags.length >= 1) {
          author = newsData.tags[0].webTitle;
        }

        let primaryPhoto, primaryCaption, photographer = '';
        
        //trying to get the captions and photographer
        if(newsData.blocks.main && newsData.blocks.main.elements[0].imageTypeData){
          primaryCaption = newsData.blocks.main.elements[0].imageTypeData.caption;
          photographer = newsData.blocks.main.elements[0].imageTypeData.credit;
        }

        if(newsData.tags.length >= 1){
          console.log(newsData.fields.headline , newsData.blocks.main.elements[0], newsData.fields.thumbnail)
        }
        //getting biggest photo possible for more pixels
        if (newsData.blocks.main.elements[0].assets[3]) {
          primaryPhoto = newsData.blocks.main.elements[0].assets[3].file;
        
        } else {          
          primaryPhoto = newsData.fields.thumbnail;
        }

        //every 'data' object comes back with a set of these custom properties
        return {
          id: newsData.id,
          title: newsData.fields.headline,
          caption: primaryCaption,
          author: author,
          dateCreated: newsData.blocks.main.createdDate,
          body: newsData.fields.body,
          thumbnail: newsData.fields.thumbnail,
          image: primaryPhoto,
          photographer: photographer
        };
      });
      setData(newsData);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  return {
    data,
    isLoading,
    error,
    fetchNow,
  };
};

export default useFetch;
