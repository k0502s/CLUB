import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import * as S from '../LandingPage.style'
import { useSelector } from 'react-redux';

const PhotoImage = () => {
    const [Images, setImages] = useState([]);
    const { bestimages } = useSelector((state) => state.photo);

    useEffect(() => {
        console.log([...bestimages]);
        let images = [];

        [...bestimages].map((item) => {
            console.log(item.images);
            images.push({
                original: `${item.images[0]}`,
                thumbnail: `${item.images[0]}`,
            });
        });
        setImages(images);
    }, [bestimages]);

    return (
        <>
            <ImageGallery autoPlay="true" showBullets="true" showThumbnails={false} showNav={false} items={Images}/>
        </>
    );
};

export default PhotoImage;
