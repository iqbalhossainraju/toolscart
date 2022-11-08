import React from 'react';
import bg from '../../assets/slider_banner1.webp';

const Carousel = () => {
    return (
        <>
            <div className="carousel w-full lg:h-96">
                <div id="slide1" className="carousel-item relative w-full" style={{ background: `url(${bg})`, backgroundSize: 'cover' }}>
                    <div className="lg:ml-72 lg:mt-28 ml-5 uppercase">
                        <p className="lg:text-2xl font-bold">new in stock tools</p>
                        <h2 className="lg:text-4xl text-2xl text-primary font-bold my-2">super power drills</h2>
                        <p className="lg:text-xl">new arrival 2022</p>
                        <button className="btn btn-primary text-white my-2">shop now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full" style={{ background: `url(${bg})`, backgroundSize: 'cover' }}>
                    <div className="lg:ml-72 lg:mt-28 ml-5 uppercase">
                        <p className="lg:text-2xl text-xl font-bold">new in stock tools</p>
                        <h2 className="lg:text-4xl text-2xl text-primary font-bold my-2">super power drills</h2>
                        <p className="lg:text-xl">new arrival 2022</p>
                        <button className="btn btn-primary text-white my-2">shop now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full" style={{ background: `url(${bg})`, backgroundSize: 'cover' }}>
                    <div className="lg:ml-72 lg:mt-28 ml-5 uppercase">
                        <p className="lg:text-2xl text-xl font-bold">new in stock tools</p>
                        <h2 className="lg:text-4xl text-2xl text-primary font-bold my-2">super power drills</h2>
                        <p className="lg:text-xl">new arrival 2022</p>
                        <button className="btn btn-primary text-white my-2">shop now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carousel;