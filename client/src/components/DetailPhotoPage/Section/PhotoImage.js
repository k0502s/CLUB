import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import { useSelector } from 'react-redux';

const PhotoImage = () => {
    const [Images, setImages] = useState([]);
    const { detailphoto } = useSelector((state) => state.photo);

    useEffect(() => {
        if (detailphoto.images && detailphoto.images.length > 0) {
            let images = [];

            detailphoto.images.map((item) => {
                console.log(item);
                images.push({
                    original: `${item}`,
                    thumbnail: `${item}`,
                });
            });
            setImages(images);
        }
    }, [detailphoto]);

    return (
        <div>
            <ImageGallery showBullets="true" items={Images} />
        </div>
    );
};

export default PhotoImage;
