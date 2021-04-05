import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import { useSelector } from 'react-redux';

const PhotoImage = () => {
    const [Images, setImages] = useState([]);
    const { bestimages } = useSelector((state) => state.photo);

    useEffect(() => {
        console.log([...bestimages]);
        // if ([...bestimages].images && [...bestimages].images.length > 0) {
        let images = [];

        [...bestimages].map((item) => {
            console.log(item.images);
            images.push({
                original: `${item.images[0]}`,
                thumbnail: `${item.images[0]}`,
            });
        });
        setImages(images);
        // }
    }, [bestimages]);

    return (
        <div>
            <ImageGallery autoPlay="true" showBullets="true" showThumbnails={false} showNav={false} items={Images}/>
        </div>
    );
};

export default PhotoImage;
