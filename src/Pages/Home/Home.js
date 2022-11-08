import React from 'react';
import Blog from './Blog';
import Brands from './Brands';
import Carousel from './Carousel';
import Creator from './Creator';
import Info from './Info';
import Products from './Products';
import Promo from './Promo';
import VariousTools from './VariousTools';

const Home = () => {
    return (
        <div>
            <Carousel />
            <Info />
            <VariousTools />
            <Products />
            <Promo />
            <Brands />
            <Creator />
            <Blog />
        </div>
    );
};

export default Home;