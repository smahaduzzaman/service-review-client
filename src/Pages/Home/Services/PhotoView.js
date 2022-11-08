import React from 'react';

const PhotoView = ({ item, index }) => {
    const { src, alt } = item;
    return (
        <div>
            <img src={src} alt={alt} />
        </div>
    );
};

export default PhotoView;