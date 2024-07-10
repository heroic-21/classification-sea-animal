import React from "react";

const AllTeam = ({id}) => {
    return (
        <div id={id}>
            <BackgroundImage />
            <JudulSponsor />
            <ListDosen />
        </div>
    )
}

const Image1 = "../hardi.jpeg"
const Image2 = "../ariyan.jpeg"
const imageUrl = '../BGTeams2.png';
const BackgroundImage = () => {
    return (
        <div className="mt-[10rem] w-auto h-[703px] bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
            <JudulTeams />
            <div className="flex flex-row">
            <div className="flex flex-row space-x-[3rem] ml-[16rem]">
                <Foto ImageTeam={Image1} nama="Hardi Ananda" nim="2257301055" />
                <Foto ImageTeam={Image2} nama="Ariyan Nafis" nim="2257301038" />
            </div>
            <div className="flex flex-col items-end ml-[17.5rem] mt-[5rem]">
                <Konten konten="Politeknik Caltex Riau" /><br />
                <Konten konten="D4 Information System" />
                <Konten konten="And Technology Bisnis" />
                <Tombol />
            </div>
            </div>
        </div>
    )
}

const Image3 = "../mahrus.jpg"
const Image4 = "../dini.jpg"
const Image5 = "../mardhiah.jpg"
const ListDosen = () => {
    return (
        <div className="flex flex-row justify-center items-center space-x-[5rem] mb-[10rem]">
            <Foto ImageTeam={Image3} nama="Muhammad Mahrus Zain, S.S.T., M.T.I." nim="169318"/>
            <Foto ImageTeam={Image4} nama="Dini Nurmalasari, S.T.,M.T." nim="048108"/>
            <Foto ImageTeam={Image5} nama="Mardhiah Fadli, S.T.,M.T." nim="078306"/>
        </div>
    )
}

const JudulTeams = () => {
    return (
        <div className="mr-[15rem] flex flex-row justify-end items-center space-x-[3rem]">
            <h1 className="mt-[6rem] text-white font-bold text-[64px]">
                Tim
            </h1>
        </div>
    )
}

const Konten = ({ konten }) => {
    return (
        <div className="font-medium text-white text-[2rem]">
            {konten}
        </div>
    )
}
const styleButton = "w-[234px] mt-[4rem] pt-2 h-[54px] bg-white rounded-[10px] text-[0A3842] text-center font-medium text-[1.5rem] shine-glow transition-shadow duration-500 ease-in-out"
const Tombol = () => {
    return (
        <a className={styleButton} href="https://pcr.ac.id/" target="_blank">Universitas</a>
    )
}
const StyleLabel = "shadow-lg w-[543px] h-[1085px] bg-slate-600";
const Foto = ({ ImageTeam, nama, nim }) => {
    return (
        <div className="w-[373px] h-[410px] bg-cover bg-center flex flex-col justify-end" style={{ backgroundImage: `url(${ImageTeam})`, StyleLabel, boxShadow: '-15px 20px 20px -10px #0A3842' }}>
            <div className="w-full h-[200px]" style={{ background: 'linear-gradient(to bottom, rgba(10, 56, 66, 0) 0%, rgba(10, 56, 66, 1) 100%)' }} >
                <div className=" text-white ml-[1rem] mt-[6rem]">
                    <Nama nama={nama} />
                    <NIM nim={nim} />
                    <div className="mt-[1rem] bg-white w-[190px] rounded-sm h-[0.1rem]" />
                </div>
            </div>
        </div>
    )
}

const Nama = ({ nama }) => {
    return (
        <h1 className="font-medium text-white text-[20px]">
            {nama}
        </h1>
    )
}

const NIM = ({ nim }) => {
    return (
        <h2 className="font-medium text-white text-[20px]">
            {nim}
        </h2>
    )
}

const JudulSponsor = () => {
    return (
        <div className="flex items-center ml-[18rem] space-x-[3rem] my-[5rem]">
            <h1 className="text-[0A3842] font-bold text-[5rem]">
                Project Sponsor.
            </h1>
        </div>
    )
}

export default AllTeam;