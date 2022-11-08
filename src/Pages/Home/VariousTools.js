import React from 'react';
import { Link } from 'react-router-dom';
import vt1 from '../../assets/various tools/image_1.avif';
import vt2 from '../../assets/various tools/image_2.avif';
import vt3 from '../../assets/various tools/image_3.webp';
import vt4 from '../../assets/various tools/image_4.webp';
import vt5 from '../../assets/various tools/image_5.webp';
import vt6 from '../../assets/various tools/image_6.webp';
import vt7 from '../../assets/various tools/image_7.webp';
import vt8 from '../../assets/various tools/image_8.webp';
import vt9 from '../../assets/various tools/image_9.avif';

const VariousTools = () => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-9 gap-3 p-5">
            <div className="uppercase font-bold ">
                <div className="border-2 border-primary hover:border-gray-500 rounded-lg p-4">
                    <img src={vt1} alt="" />
                </div>
                <Link to='/shop' className="flex justify-center text-gray-500 items-center mt-2 hover:text-primary">hammer</Link>
            </div>

            <div className="uppercase font-bold ">
                <div className="border-2 border-primary hover:border-gray-500 rounded-lg p-4">
                    <img src={vt2} alt="" />
                </div>
                <Link to='/shop' className="flex justify-center text-gray-500 items-center mt-2 hover:text-primary">mbb part</Link>
            </div>

            <div className="uppercase font-bold ">
                <div className="border-2 border-primary hover:border-gray-500 rounded-lg p-4">
                    <img src={vt3} alt="" />
                </div>
                <Link to='/shop' className="flex justify-center text-gray-500 items-center mt-2 hover:text-primary">controller</Link>
            </div>

            <div className="uppercase font-bold ">
                <div className="border-2 border-primary hover:border-gray-500 rounded-lg p-4">
                    <img src={vt4} alt="" />
                </div>
                <Link to='/shop' className="flex justify-center text-gray-500 items-center mt-2 hover:text-primary">equipment</Link>
            </div>

            <div className="uppercase font-bold ">
                <div className="border-2 border-primary hover:border-gray-500 rounded-lg p-4">
                    <img src={vt5} alt="" />
                </div>
                <Link to='/shop' className="flex justify-center text-gray-500 items-center mt-2 hover:text-primary">bettry</Link>
            </div>

            <div className="uppercase font-bold ">
                <div className="border-2 border-primary hover:border-gray-500 rounded-lg p-4">
                    <img src={vt6} alt="" />
                </div>
                <Link to='/shop' className="flex justify-center text-gray-500 items-center mt-2 hover:text-primary">tools</Link>
            </div>

            <div className="uppercase font-bold ">
                <div className="border-2 border-primary hover:border-gray-500 rounded-lg p-4">
                    <img src={vt7} alt="" />
                </div>
                <Link to='/shop' className="flex justify-center text-gray-500 items-center mt-2 hover:text-primary">rake</Link>
            </div>

            <div className="uppercase font-bold ">
                <div className="border-2 border-primary hover:border-gray-500 rounded-lg p-4">
                    <img src={vt8} alt="" />
                </div>
                <Link to='/shop' className="flex justify-center text-gray-500 items-center mt-2 hover:text-primary">cultivator</Link>
            </div>

            <div className="uppercase font-bold ">
                <div className="border-2 border-primary hover:border-gray-500 rounded-lg p-4">
                    <img src={vt9} alt="" />
                </div>
                <Link to='/shop' className="flex justify-center text-gray-500 items-center mt-2 hover:text-primary">ladder</Link>
            </div>
        </div>
    );
};

export default VariousTools;