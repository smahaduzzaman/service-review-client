import React from 'react';
import slider1 from '../../../../assets/images/sliders/article.png';
import slider2 from '../../../../assets/images/sliders/multiple-page.png';
import slider3 from '../../../../assets/images/sliders/nobel.png';
import slider4 from '../../../../assets/images/sliders/reserch.png';
import slider5 from '../../../../assets/images/sliders/single-page.png';
import slider6 from '../../../../assets/images/sliders/song.png';

const Slider = () => {
    return (
        <div className="relative w-full flex gap-4 py-6 mb-20 overflow-x-auto">
            <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={slider1} alt="Image 1" />
            <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={slider2} alt="Image 2" />
            <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={slider3} alt="Image 3" />
            <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={slider4} alt="Image 4" />
            <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={slider5} alt="Image 5" />
            <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={slider6} alt="Image 5" />
        </div>
    );
};

export default Slider;