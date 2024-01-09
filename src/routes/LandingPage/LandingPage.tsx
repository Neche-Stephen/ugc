import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Hero from '../../components/hero/Hero';
import Search from '../../components/search/Search';

const LandingPage: React.FC = () => {
    return (
      <div>
        <Navbar />
        <Hero />
        <Search />
      
      </div>
    );
  };
  
  export default LandingPage;