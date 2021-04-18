import React from 'react';
import About from '../About/About';
import AboutCeo from '../AboutCeo/AboutCeo';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <About></About>
            <AboutCeo></AboutCeo>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;