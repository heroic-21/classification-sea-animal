import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const HeaderSection = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`relative z-20 ${isScrolled ? 'bg-opacity-90' : 'bg-opacity-100'}`}>
            <div className="flex bg-[#0f1416] shadow-2xl fixed flex-row justify-around items-center w-full space-x-0 px-4 py-6 mt-0 transition duration-300 ease-in-out">
                <Logo />
                <Menu />
            </div>
        </div>
    );
};

const Logo = () => {
    return (
        <div className="bg-white cursor-pointer px-2 py-2 rounded-[10px] w-[236px] h-[41px] flex items-center justify-center">
            <img className="w-[189px] h-auto" src={"../logopcr.png"} alt="Logo" />
        </div>
    );
};

const Menu = () => {
    return (
        <nav>
            <ul className="ml-5 text-white text-lg flex flex-row justify-center items-center space-x-[100px] list-none">
                <li className="cursor-pointer shine-glowHeader transition-shadow duration-500 ease-in-out rounded-[10px] nav-item">
                    <ScrollLink to="dashboard" smooth={true} duration={500} offset={-80}>
                        Dashboard
                    </ScrollLink>
                </li>
                <li className="cursor-pointer nav-item">
                    <ScrollLink to="about" smooth={true} duration={500} offset={-80}>
                        Tentang
                    </ScrollLink>
                </li>
                <li className="cursor-pointer nav-item">
                    <ScrollLink to="sistem" smooth={true} duration={500} offset={-80}>
                        Sistem
                    </ScrollLink>
                </li>
                <li className="cursor-pointer nav-item">
                    <ScrollLink to="teams" smooth={true} duration={500} offset={-80}>
                        Tim
                    </ScrollLink>
                </li>
                <li className="cursor-pointer nav-item">
                    <ScrollLink to="prediction" smooth={true} duration={500} offset={-80}>
                        Prediksi
                    </ScrollLink>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderSection;
