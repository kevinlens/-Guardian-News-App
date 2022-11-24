//IMPORTING IN THE ORIGIN OF CONTEXT OBJECT
//React.createContext
//TO USE THE CONTEXT's PROVIDER FEATURE
import { useEffect, useState } from 'react';
import NewsContext from './News-Context';

//COMPONENT
const NewsProvider = (props) => {

  const [todaysDate, setTodaysDate] = useState([]);

  useEffect(() => {
    getCurrentDate();
  });

  const getCurrentDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd ;  
    setTodaysDate(today)
  }

  //CONCRETE CONTEXT VALUES TO BE UPDATED OVER TIME
  const newsContext = {
    //values
    currentDate: todaysDate
  };


  //COMPONENTS/CHILDREN INSIDE OF THIS PROVIDER WILL
  //HAVE ACCESS TO THE GLOBAL OBJECT
  //PROVIDER IS WHAT MAKES OUR CONTEXT DATA DYNAMIC
  return (
    //passing in our custom context object 'newsContext'
    //that will handle and change the global context origin
	 <NewsContext.Provider value={newsContext}>
		  {props.children}
	 </NewsContext.Provider>
         )};

export default NewsProvider;