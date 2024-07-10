import React from "react";

const About = ({ id }) => {
    return (
        <div id={id} className="relative z-10">
            <Sea />
            <SubSea />
            <ListLabel />  
        </div>
    )
}

const Sea = () => {
    return (
        <div className="mt-[15rem] flex flex-row justify-center items-center">
            <h1 className="text-white font-bold text-[4rem]">
                Tentang Web.
            </h1>
        </div>
    )
}

const SubSea = () => {
    return (
        <div className="flex flex-row justify-center text-center">
            <p className="text-white my-[3rem] font-normal text-[1.4rem] w-[900px] h-[96px]">
                Selamat datang di platform inovatif kami yang dirancang khusus untuk membantu Anda mengenali berbagai jenis makhluk laut dengan mudah dan akurat.
            </p>
        </div>
    )
}
const StyleLabel = "space-y-3 w-[373px] pt-[13rem] pl-[1rem] pr-[1rem] h-[410px] bg-slate-800 shadow-lg";
const penguin = '../Penguin.jpg'
const kepiting = '../Kepiting.jpg'
const buluBabu = '../BuluBabi.jpg'
const bintangLaut = '../BintangLaut2.jpg'
const uburUbur = '../JellyFish.jpg'
const Seaa = '../MainBgSlider.png'
const Label = ({ namaLabel, image, KeteranganLabel }) => {
    return (
        <div className={StyleLabel} style={{
            boxShadow: '-15px 20px 20px -10px #0F1515',
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 1, 1) 100%), url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className="text-[32px] text-white font-bold">{namaLabel}</div>
            <div className="text-white font-normal">{KeteranganLabel}</div>
            <div className="w-[190px] h-[0.1rem] bg-white" />
        </div>
    );
}
const ListLabel = () => {
    return (
        <div className="flex justify-center ml-[5rem]">
            <div className="w-[84rem] h-[59rem] grid grid-cols-3">
                <Label namaLabel="Penguin" image={penguin} KeteranganLabel="Penguin adalah burung akuatik yang tidak bisa terbang, hidup di belahan bumi selatan, terutama Antartika. Mereka perenang ulung dan memakan ikan serta makanan laut lainnya." />
                <Label namaLabel="Ubur-Ubur" image={uburUbur} KeteranganLabel="Ubur-ubur adalah hewan laut invertebrata dengan tubuh berbentuk payung dan menyengat. Mereka bergerak dengan kontraksi tubuh dan ditemukan di berbagai lautan." />
                <Label namaLabel="Kepiting" image={kepiting} KeteranganLabel="Kepiting adalah hewan laut berkulit keras dengan tubuh yang lebar dan datar, serta sepasang capit besar. Mereka hidup di berbagai habitat, termasuk laut, air tawar, dan darat." />
                <Label namaLabel="Bintang Laut" image={bintangLaut} KeteranganLabel="Bintang laut adalah hewan laut invertebrata dengan tubuh berbentuk bintang yang biasanya memiliki lima lengan, meskipun beberapa spesies memiliki lebih banyak." />
                <Label namaLabel="Bulu Babi" image={buluBabu} KeteranganLabel="Bulu babi adalah hewan laut invertebrata dengan tubuh bulat yang ditutupi duri tajam. Mereka hidup di dasar laut, dari perairan dangkal hingga kedalaman yang lebih besar." />
                <Label namaLabel="Sea" image={Seaa} KeteranganLabel="Lautan adalah badan air asin besar yang menutupi sekitar 71% permukaan bumi. Mereka terbagi menjadi lima lautan utama: Pasifik, Atlantik, Hindia, Selatan, dan Arktik." />
            </div>
        </div>
    )
}

export default About;