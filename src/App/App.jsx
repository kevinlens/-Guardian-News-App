//REACT TOOLS
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

//SCSS
import styles from './App.module.scss';

//IMPORTED COMPONENTS
import Header from '../components/Layout/Header/Header';
import LogoSection from '../components/Layout/LogoSection/LogoSection';
import Front_Page from '../components/Layout/Front_Page/Front_Page';
import HorizontalNewsofFour from '../components/Topics/HorizontalNewsofFour/HorizontalNewsofFour';
import Section2 from '../components/Layout/Section2/Section2';
import Section3 from '../components/Layout/Section3/Section3';
import Section4 from '../components/Layout/Section4/Section4';
import Section5 from '../components/Layout/Section5/Section5';
import Section6 from '../components/Layout/Section6/Section6';
import Footer from '../components/Layout/Footer/Footer';
import NewsProvider from '../store/NewsProvider';
import Summary from '../pages/Summary';

//FONTS
import '../assets/Fonts/PostoniWide-Regular.woff2';
import '../assets/Fonts/PostoniWide-Bold.woff2';
import '../assets/Fonts/ITC_Franklin-Light.woff2';
import '../assets/Fonts/ITC_Franklin-Bold.woff2';

function App() {
  return (
    <section className={styles.container}>
      <Routes>
        <Route
          path='/'
          element={
            <>
              {/* allows global access to current date */}
              <NewsProvider>
                <Header />
                <LogoSection />
                <Front_Page />
                <HorizontalNewsofFour />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Footer />
              </NewsProvider>
            </>
          }
        />
        <Route
          path='/summary'
          element={
            <NewsProvider>
              <Header />
              <Summary />
            </NewsProvider>
          }
        />
      </Routes>
    </section>
  );
}

export default App;
