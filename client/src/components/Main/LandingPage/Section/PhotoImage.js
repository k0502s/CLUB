import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import { useSelector } from 'react-redux';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import * as S from '../LandingPage.style';

const PhotoImage = () => {
    const [Images, setImages] = useState([]);
    const { bestimages } = useSelector((state) => state.photo);
    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        prevArrow: (
            <div style={{ width: '30px', marginRight: '-30px', color: '#fff', fontSize: '80px', fontWeight: 'bold' }}>
                <BsChevronCompactLeft>
                    <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
                </BsChevronCompactLeft>
            </div>
        ),
        nextArrow: (
            <div style={{ width: '30px', marginLeft: '-30px', color: '#fff', fontSize: '80px', fontWeight: 'bold' }}>
                <BsChevronCompactRight>
                    <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
                </BsChevronCompactRight>
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
                title: `${item.title}`,
                writer: `${item.writer.name}`,
            });
        });
        setImages(images);
    }, [bestimages]);

    return (
        <>
            <S.ImgWrap Mheight={'280px'}>
                <Slide easing="ease" {...properties}>
                    {Images.map((images, index) => (
                        <Link to={`photo/${images.link}`} data-testid="images-link">
                            <div className="each-slide" index={index}>
                                <div style={{ backgroundImage: `url(${images.original})` }} data-testid='bestimage-url'>
                                    <span>
                                        <div>
                                            <small data-testid="images-info">
                                                제목: {images.title} &nbsp;| &nbsp; By {images.writer}
                                            </small>
                                        </div>
                                    </span>
                                    <span>
                                        <div>
                                            <p>
                                                <S.TrophyIcon /> 동호회 인기 갤러리 작품
                                            </p>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Slide>
            </S.ImgWrap>
        </>
    );
};

export default PhotoImage;
