import React from 'react';
import Navbar from './components/navbar/nav';
import HeroSection from './components/heroSection/hero'
import Features from './components/features/features';
import Articles from './components/articles/articles';
import Footer from './components/footer/footer';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <div className="overlay" id='overlay'></div>

      <Navbar />
      <HeroSection />
      <Features />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
