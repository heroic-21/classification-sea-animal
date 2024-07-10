import React from "react";

const ObjectiveArchitecture = ({id}) => {
    return (
        <div id={id}>
            <System/>
            <SubSystem/>
            <BackgroundImage />
            <Architecture />
            <div className="flex flex-row justify-center space-x-[3rem]">
                <Flowchart />
                <OutKonten />
            </div>
        </div>
    )
}

const System = () => {
    return (
        <div className="mt-[12rem] ml-[18.8rem] flex flex-row justify-start items-center">
            <h1 className="text-[0A3842] font-bold text-[4rem]">
                Pengembangan Sistem.
            </h1>
        </div>
    )
}

const imgReact = "../react.png"
const imgPython = "../python.png"
const SubSystem = () => {
    return (
        <div className="flex flex-row  justify-start ml-[18.8rem] items-center">
            <p className="text-[0A3842] my-[2rem] font-medium text-[24px] w-[600px]">
                Platform ini menggunakan React JS untuk frontend dan Python untuk backend, hasil dari pengembangan dalam mata kuliah Framework Lanjutan dan Data Mining. Kami memberikan pengalaman identifikasi hewan laut yang efisien dan handal bagi pengguna dari semua latar belakang, mulai dari ahli biologi kelautan hingga penggemar kehidupan laut.
            </p>
            <div className="">
                <div className="space-y-12 ml-[20rem]">
                    <div className="flex flex-row space-x-8 items-center text-[24px]">
                        <img src={imgReact} className="size-[6.5rem]"/>
                        <div>
                            <div className="font-bold">FRONTEND</div>
                            <div className="font-medium">React JS</div>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-8 items-center text-[24px]">
                        <img src={imgPython} className="size-[6.5rem]"/>
                        <div>
                            <div className="font-bold">BACKEND</div>
                            <div className="font-medium">Python</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Objective = () => {
    return (
        <div className="flex items-center space-x-[3rem] mt-[4rem] mb-[4rem]">
            <h1 className="text-white font-bold text-[4rem]">
                Tujuan Sistem.
            </h1>
        </div>
    )
}
const imageUrl = '../BGObjective.png';
const image1 = '../Understanding.png';
const image2 = '../Documentation.png';
const image3 = '../Resource.png';
const BackgroundImage = () => {
    return (
        <div className="mt-[4rem] w-auto h-[1200px] bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="h-[1200px] w-auto flex flex-col items-center"
                style={{ background: 'linear-gradient(to bottom, rgba(10, 56, 66, 0) 0%, rgba(10, 56, 66, 1) 100%)' }}>
                <Objective />
                <div className="space-y-[5rem]">
                    <KontenObjective src={image1} konten="Pengertian Hewan Laut" keterangan="Hewan laut adalah makhluk hidup yang hidup di laut atau samudra, termasuk ikan, mamalia laut, invertebrata, dan echinodermata. Mereka berperan penting dalam ekosistem laut dan bervariasi dalam bentuk dan ukuran." />
                    <KontenObjective src={image2} konten="Identifikasi Dan Dokumentasi" keterangan="Identifikasi hewan laut adalah proses mengenali spesies berdasarkan ciri fisik dan perilaku. Dokumentasi hewan laut adalah pencatatan data mengenai spesies untuk penelitian dan konservasi." />
                    <KontenObjective src={image3} konten="Penelitian Dan Pendidikan" keterangan="Penelitian hewan laut adalah studi ilmiah tentang kehidupan dan ekosistem laut. Pendidikan hewan laut adalah upaya mengajar masyarakat tentang konservasi dan keberagaman makhluk laut." />
                </div>
            </div>
        </div>
    )
}

const KontenObjective = ({ src, konten, keterangan }) => {
    return (
        <div className="flex flex-row items-center">
            <div className="flex flex-col items-center justify-start mr-[3rem]">
                <img className="h-[118px] w-[111px]" src={src} alt="Sea Animal mt-[2rem]" />
                <h1 className="font-bold text-white text-[32px] w-[274px] text-center">{konten}</h1>
            </div>
            <p className="w-[47rem] text-[24px] text-white font-normal">
                {keterangan}
            </p>
        </div>
    )
}

const Architecture = () => {
    return (
        <div className="flex items-center justify-end mr-[19rem] mt-[5rem] mb-[5rem] space-x-[3rem]">
            <h1 className="text-[0A3842] font-bold text-[4rem]">
                Arsitektur dan Pembuatan Sistem
            </h1>
        </div>
    )
}
const StyleLabel = "shadow-lg w-[597px] h-[1706px] bg-slate-600";
const img1 = "../Flowchart.png"
const Flowchart = () => {
    return (
        <img className={StyleLabel} style={{ boxShadow: '-15px 20px 20px -10px #0A3842' }} src={img1} />
    )
}
const LogoData = "../database.png"
const LogoModel = "../3d-modeling.png"
const LogoBackEnd = "../ui-design.png"
const LogoFrontEnd = "../ux2.png"
const Logo = (Image) => {
    return (
        <img className={StyleLabel} style={{ boxShadow: '-15px 20px 20px -10px #0A3842' }} src={Image} />
    )
}

const SubJudul = ({ subJudul, logo }) => {
    return (
        <div className="flex flex-row items-center space-x-8">
            <img src={logo} className="size-[5rem]"/>
            <div className="font-bold text-white p-3 w-[21rem] text-[32px] bg-[0A3842]">
                {subJudul}
            </div>
        </div>

    )
}

const Tanggal = ({ tanggal }) => {
    return (
        <div className="flex flex-row items-center space-x-7">
            <div className="w-[231px] h-[0.1rem] bg-[0A3842]" />
            <div className=" text-[24px] font-medium text-[0A3842]">
                {tanggal}
            </div>
        </div>
    )
}

const Konten = ({ konten }) => {
    return (
        <div className="text-[20px] w-[700px] mt-[0.5rem] font-medium text-[0A3842]">
            {konten}
        </div>
    )
}

const AllKonten = ({ subJudul, tanggal, konten, logo }) => {
    return (
        <div className="space-y-[1rem]">
            <SubJudul subJudul={subJudul} logo={logo} />
            <Tanggal tanggal={tanggal} />
            <Konten konten={konten} />
        </div>
    )
}

const OutKonten = () => {
    return (
        <div className="flex flex-col space-y-[3rem] ">
            <AllKonten logo={LogoData} subJudul="Pengumpulan Data" tanggal="10 Juni 2024" konten="Proses mengumpulkan informasi dari berbagai sumber yang relevan untuk dianalisis. Ini dapat melibatkan metode seperti survei, eksperimen, sensor, atau scraping data dari web." />
            <AllKonten logo={LogoModel} subJudul="Modelling Data" tanggal="20 Juni 2024" konten="Proses membuat model matematis atau statistik untuk merepresentasikan data yang dikumpulkan. Ini membantu dalam menganalisis data dan membuat prediksi atau pengambilan keputusan berdasarkan pola yang ditemukan." />
            <AllKonten logo={LogoBackEnd} subJudul="BackEnd" tanggal="25 Juni 2024" konten="Bagian dari aplikasi atau sistem yang berfungsi di server dan mengelola logika bisnis, database, dan autentikasi pengguna. Backend menangani permintaan dari frontend dan mengirimkan respons yang sesuai dengan menggunakan bahasa pemrograman Python." />
            <AllKonten logo={LogoFrontEnd} subJudul="FrontEnd" tanggal="28 Juni 2024" konten="Bagian dari aplikasi atau sistem yang berinteraksi langsung dengan pengguna. Frontend mencakup desain antarmuka pengguna (UI) dan pengalaman pengguna (UX), serta implementasi menggunakan teknologi web framework yaitu React JS dan Tailwind CSS." />
        </div>
    )
}


export default ObjectiveArchitecture;