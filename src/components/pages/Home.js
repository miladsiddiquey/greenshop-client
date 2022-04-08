import React from 'react';
import CactusSection from '../sections/CactusSection';
import FeaturedProduct from '../sections/FeaturedProduct';
import Fetcher from '../sections/Fetcher';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import HomePlants from '../sections/HomePlants';
import Product from '../sections/Product';
import SlideShow from '../sections/SlideShow';
import SmallBanner from '../sections/SmallBanner';
import Testimonials from '../sections/Testimonials';


const Home = () => {
    return (
        <div>
           <Header/>
           <SlideShow/>
           <Fetcher/>
           <HomePlants/>
           <FeaturedProduct/>
           <SmallBanner/>
           <Product/>
           <CactusSection/>
           <Testimonials/>
           <Footer/>
        </div>
    );
};

export default Home;