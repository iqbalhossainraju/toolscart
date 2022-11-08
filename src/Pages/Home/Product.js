import React, { useState } from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';
const Product = ({ soldProduct }) => {
    const { img, title, price } = soldProduct;
    const [count, setCount] = useState(0);
    return (
        <>
            <div className="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
                <div className="flex justify-between mt-3">
                    <div className="badge badge-accent ml-4 rotate-90 shadow-lg">NEW</div>
                    <div className="badge badge-primary mr-4 uppercase font-bold">sold</div>
                </div>
                <div className="card-body capitalize">
                    <img src={img} alt="Shoes" />
                    <h2 className="card-title">{title}</h2>
                    <p>price: ${price}</p>
                    <div className="flex justify-between">
                        <div>
                            <button className="btn" onClick={() => {
                                if (count > 0) { setCount(count - 1); }
                                else { alert("Sorry, 0 limit reached."); setCount(0); }
                            }}> - </button>
                            <span className="font-bold text-primary p-2">{count}</span>
                            <button className="btn" onClick={() => { setCount(count + 1); }}>+</button>
                        </div>
                        <div>
                            <button className="btn btn-primary">Buy Now <BsFillCartCheckFill className='mx-2' style={{ fontSize: '20px' }} /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;