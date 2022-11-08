import React from 'react';
import blogImg2 from '../../assets/blog-img-2.webp';
import blogImg3 from '../../assets/blog-img-3.webp';
import blogImg4 from '../../assets/blog-img-4.webp';
import blogImg from '../../assets/blog-img.webp';

const Blog = () => {
    let date = new Date();
    let time = ((date.getHours().toString()).length > 1 ? date.getHours() : "0" + date.getHours()) + ":" + ((date.getMinutes().toString()).length > 1 ? date.getMinutes() : "0" + date.getMinutes());
    return (
        <div className="my-10">
            <h2 className="text-4xl font-bold text-primary my-5 border-b-4 border-indigo-500 inline-block ml-3">FROM THE BLOG</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <img src={blogImg} alt="" />
                        <h2 className="card-title">something title</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, in!</p>
                        <div className="flex justify-between">
                            <div>
                                <small>author: <span className="font-bold text-primary">Iqbal Hossain</span></small>
                            </div>
                            <div>
                                <small>{time}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <img src={blogImg2} alt="" />
                        <h2 className="card-title">something title</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, in!</p>
                        <div className="flex justify-between">
                            <div>
                                <small>author: <span className="font-bold text-primary">Iqbal Hossain</span></small>
                            </div>
                            <div>
                                <small>{time}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <img src={blogImg3} alt="" />
                        <h2 className="card-title">something title</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, in!</p>
                        <div className="flex justify-between">
                            <div>
                                <small>author: <span className="font-bold text-primary">Iqbal Hossain</span></small>
                            </div>
                            <div>
                                <small>{time}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <img src={blogImg4} alt="" />
                        <h2 className="card-title">something title</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, in!</p>
                        <div className="flex justify-between">
                            <div>
                                <small>author: <span className="font-bold text-primary">Iqbal Hossain</span></small>
                            </div>
                            <div>
                                <small>{time}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;