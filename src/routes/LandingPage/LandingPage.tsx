import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Hero from '../../components/hero/Hero';
import Search from '../../components/search/Search';
import Featured from '../../components/featured/Featured';
import UgcWorks from '../../components/how_ugc_works/UgcWorks';
import PopularBrands from '../../components/popular_brands/PopularBrands';
import TopInfluencers from '../../components/topInfluencers/TopInfluencers';

const LandingPage: React.FC = () => {
    return (
      <div>
        <Navbar />
        <Hero />
        <Search />
        <Featured />
        <UgcWorks />
        <PopularBrands />
        <TopInfluencers />
      </div>
    );
  };
  
  export default LandingPage;