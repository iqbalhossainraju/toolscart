import React from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';
import infoBg2 from '../../assets/info-bg-2.webp';
import infoBg3 from '../../assets/info-bg-3.webp';
import infoBg from '../../assets/info-bg.webp';

const Info = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-5">
            <div className="card lg:max-w-lg shadow-xl image-full" style={{ background: `url(${infoBg})`, backgroundSize: 'cover' }}>
                <div className="card-body">
                    <h2 className="text-primary text-4xl font-bold text-center">City Auto</h2>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nobis.</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary text-white">Buy Now <BsFillCartCheckFill className='mx-2' style={{ fontSize: '20px' }} /> </button>
                    </div>
                </div>
            </div>
            <div className="card lg:max-w-lg shadow-xl image-full" style={{ background: `url(${infoBg2})`, backgroundSize: 'cover' }}>
                <div className="card-body">
                    <h2 className="text-primary text-4xl font-bold text-center">Repair Parts</h2>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nobis.</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary text-white">Buy Now <BsFillCartCheckFill className='mx-2' style={{ fontSize: '20px' }} /> </button>
                    </div>
                </div>
            </div>
            <div className="card lg:max-w-lg shadow-xl image-full" style={{ background: `url(${infoBg3})`, backgroundSize: 'cover' }}>
                <div className="card-body">
                    <h2 className="text-primary text-4xl font-bold text-center">Auto Parts</h2>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nobis.</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary text-white">Buy Now <BsFillCartCheckFill className='mx-2' style={{ fontSize: '20px' }} /> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;