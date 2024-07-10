import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

const images = [
    '../ImageSlider3.png',
    '../ImageSlider2.png',
    // Tambahkan URL gambar lainnya di sini
];

const ImageSlider = () => {
    const [index, setIndex] = useState(0);
    const handleClick = () => setIndex((prev) => (prev + 1) % images.length);

    const { opacity, transform } = useSpring({
        opacity: 1,
        transform: 'scale(1)',
        from: { opacity: 1, transform: 'scale(0.8)' }, // Mulai dengan opacity 0 dan scale 0.8
        reverse: index % 2 === 0,
        config: config.gentle, // Gunakan config gentle untuk animasi yang lebih halus
    });

    return (
        <div className="flex flex-row justify-center items-end relative w-[40rem] h-[30rem] overflow-hidden">
            <animated.img
                src={images[index]}
                className="absolute top-0 left-0 w-[40rem] h-[30rem] object-cover rounded-[10px]"
                style={{ opacity, transform }}
            />
            <button
                onClick={handleClick}
                className="transform text-white font-bold mb-[3rem] text-[2rem] px-4 py-2 rounded-md shadow-lg"
            >
                Next
            </button>
        </div>
    );
};

export default ImageSlider;
