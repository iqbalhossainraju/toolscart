import React from 'react';
import Slider from "react-slick";
import creatorImg from "../../assets/creator.avif";
import creatorBg from "../../assets/designerBG.webp";

const Creator = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="my-10 px-5" style={{ background: `url(${creatorBg})`, backgroundSize: 'cover' }}>
            <Slider {...settings}>
                <div className="text-center">
                    <img className="w-36 mask mask-circle creatorImg" src={creatorImg} />
                    <p>Creator <span className="text-xl font-bold text-primary">Lucifa</span></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, perspiciatis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore consequuntur quae harum dicta incidunt nam!</p>
                </div>
                <div className="text-center">
                    <img className="w-36 mask mask-circle creatorImg" src={creatorImg} />
                    <p>Creator <span className="text-xl font-bold text-primary">Lucifa</span></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, perspiciatis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore consequuntur quae harum dicta incidunt nam!</p>
                </div>
                <div className="text-center">
                    <img className="w-36 mask mask-circle creatorImg" src={creatorImg} />
                    <p>Creator <span className="text-xl font-bold text-primary">Lucifa</span></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, perspiciatis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore consequuntur quae harum dicta incidunt nam!</p>
                </div>
                <div className="text-center">
                    <img className="w-36 mask mask-circle creatorImg" src={creatorImg} />
                    <p>Creator <span className="text-xl font-bold text-primary">Lucifa</span></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, perspiciatis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore consequuntur quae harum dicta incidunt nam!</p>
                </div>
            </Slider>
        </div>
    );
};

export default Creator;