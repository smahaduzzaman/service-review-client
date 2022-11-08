import { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

export default function Photos() {
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setImages(data))
    }, []);
    return (
        <PhotoProvider>
            <PhotoView src="/1.jpg">
                <img src={images} alt="" />
            </PhotoView>
        </PhotoProvider>
    );
}