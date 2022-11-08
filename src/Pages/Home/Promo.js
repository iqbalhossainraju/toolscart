import React from 'react';
import saleBg from '../../assets/various tools/box-with-hand-tool-yellow-background.jpg';

const Promo = () => {
    return (
        <div className="hero my-10" style={{ background: `url(${saleBg})`, backgroundSize: 'cover' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className=" text-center p-5">
                <p className="tracking-wide text-xl font-bold text-white">summer sale</p>
                <h2 className="text-4xl my-3 text-white">ARE YOU GETTING YOUR</h2>
                <p className="text-xl text-white">Always Saving Your Money</p>
                <p className="bg-slate-700 p-3 text-white rounded-lg my-3">USE YOUR PROMO CODE SAVE101 AND GETTING YOUR DEAL</p>
            </div>
        </div>
    );
};

export default Promo;