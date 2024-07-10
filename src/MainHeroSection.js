import React from "react";
import ImageSlider from "./ImagesSlider";
import { Link } from 'react-scroll';

export default function MainHeroSection({ id }) {
    function KomponenHero() {
        return (
            <div id={id} className="text-white">
                <Judul />
                <SubJudul />
                <Tombol />
            </div>
        )
    }
    return (
        <div className="relative z-10 mt-[16rem] flex flex-row justify-center space-x-6 items-center">
            <KomponenHero />
            <ImageSlider />
        </div>
    )
}

function Judul() {
    return (
        <h1 className="text-[4rem] w-[700px] font-bold">Sistem Klasifikasi Hewan Laut.</h1>
    )
}
function SubJudul() {
    return (
        <div className="text-[2rem] mt-1 w-[500px] font-medium">
            <h5>Ayo jelajahi satwa laut, Berbagai Macam Fauna</h5>
        </div>
    )
}

const styleButton = "w-[200px] h-[54px] bg-white rounded-[10px] text-[0A3842] font-bold text-[1.2rem] shine-glow transition-shadow duration-500 ease-in-out"
const styleButton2 = "w-[200px] h-[54px] outline outline-2 rounded-[10px] text-white font-bold text-[1.2rem] shine-glow transition-shadow duration-500 ease-in-out"
function Tombol() {
    return (
        <div className="flex flex-row  space-x-10 w-[504px] mt-3">
            <nav className="flex flex-row  space-x-10 w-[504px] mt-3">
                <Link to="prediction" smooth={true} duration={500} offset={-80}>
                    <button className={styleButton}>Prediction</button>
                </Link>
                <Link to="about" smooth={true} duration={500} offset={-80}>
                    <button className={styleButton2}>About</button>
                </Link>
            </nav>
        </div>
    )
}