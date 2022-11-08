import React from 'react';
import notFound from '../../assets/404-not-found.png';

const NotFound = () => {
    return (
        <div className="flex justify-center">
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;