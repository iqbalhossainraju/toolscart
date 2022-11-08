import React from 'react';
import Carousel from './Carousel';
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
        </div>
    );
};

export default Home;