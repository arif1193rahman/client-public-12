import React from 'react';
import Technician from '../../Technician/Technician';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurServices from '../OurServices/OurServices';
import ReviewItem from '../ReviewItem/ReviewItem';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <OurServices></OurServices>
            <Reviews></Reviews>
            <Technician></Technician>
            <ReviewItem></ReviewItem>
            <Footer></Footer>
        </div>
    );
};

export default Home;