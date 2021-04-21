import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from '../LandingPage.style';
import { Slide } from 'react-slideshow-image';
import { useSelector } from 'react-redux';

const PhotoImage = () => {
    const [Images, setImages] = useState([]);
    const { bestimages } = useSelector((state) => state.photo);
    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        prevArrow: (
            <div style={{ width: '30px', marginRight: '-30px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
                    <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
                </svg>
            </div>
        ),
        nextArrow: (
            <div style={{ width: '30px', marginLeft: '-30px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff">
                    <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
                </svg>
            </div>
        ),
    };
    useEffect(() => {
        console.log([...bestimages]);
        let images = [];

        [...bestimages].map((item) => {
            console.log(item.images);
            images.push({
                original: `${item.images[0]}`,
                thumbnail: `${item.images[0]}`,
                link: `${item._id}`,
            });
        });
        setImages(images);
    }, [bestimages]);

    return (
        <>
            <S.wrap>
                <Slide easing="ease" {...properties}>
                    {Images.map((images, index) => (
                        <Link to={`photo/${images.link}`}>
                            <div className="each-slide" index={index}>
                                <div style={{ backgroundImage: `url(${images.original})` }}></div>
                            </div>
                        </Link>
                    ))}
                </Slide>
            </S.wrap>
        </>
    );
};

export default PhotoImage;
