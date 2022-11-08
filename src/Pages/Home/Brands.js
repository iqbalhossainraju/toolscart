import React from 'react';
import brands from '../../assets/brands/brands-1.webp';
import brands2 from '../../assets/brands/brands-2.webp';
import brands3 from '../../assets/brands/brands-3.webp';
import brands4 from '../../assets/brands/brands-4.avif';
import brands5 from '../../assets/brands/brands-5.webp';
import brands6 from '../../assets/brands/brands-6.avif';

const Brands = () => {
    return (
        <div className="text-center">
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-5 px-10 lg:ml-12 md:ml-16">
                <div>
                    <img src={brands} alt="" />
                </div>
                <div>
                    <img src={brands2} alt="" />
                </div>
                <div>
                    <img src={brands3} alt="" />
                </div>
                <div>
                    <img src={brands4} alt="" />
                </div>
                <div>
                    <img src={brands5} alt="" />
                </div>
                <div>
                    <img src={brands6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Brands;