import React from "react";

const imageUrl = "../BGPredict.png";

const Prediction = ({ id }) => {
  const [status, setStatus] = React.useState('');
  const [hasil, setHasil] = React.useState('');
  const [confidence, setConfidence] = React.useState('');
  const [uploadedImage, setUploadedImage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleUpload = async (event) => {
    event.preventDefault();
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];
    setUploadedImage(URL.createObjectURL(file));
    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('https://b097-35-243-176-82.ngrok-free.app/predict', {
        method: 'POST',
        body: formData,
        cache: 'no-cache',
        headers: {
          'Accept': 'application/json'
        }
      });

      const json = await response.json();

      console.log(json);

      if (json.success) {
        setStatus('<div style="text-align:left;">File berhasil diproses!</div>');
      } else {
        setStatus('<div style="text-align:left;">File gagal diproses!</div>');
      }

      setConfidence(json.confidence);

      switch (json.label) {
        case 0:
          setHasil('Kepiting');
          break;
        case 1:
          setHasil('Ubur Ubur');
          break;
        case 2:
          setHasil('Penguin');
          break;
        case 3:
          setHasil('Bulu Babi');
          break;
        case 4:
          setHasil('Bintang Laut');
          break;
        default:
          setHasil('Tidak Terdeteksi');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('<div style="text-align:left;">File gagal diproses!</div>');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id={id} className="mt-[4rem] w-auto h-[1665px] bg-cover" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="h-[264px] w-auto" style={{ background: 'linear-gradient(rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)' }}>
        <JudulPrediction />
        <div className="flex flex-row mt-[10rem] space-x-[15rem]">
          <div className="flex flex-col ml-[15rem]">
            <form onSubmit={handleUpload} name="file" method="POST" encType="multipart/form-data">
              <SubJudulPrediction />
              <ChooseFile />
              <TombolUpload />
            </form>
          </div>
          {loading ? (
            <div className="w-[650px] h-auto bg-white rounded-[10px] flex items-center justify-center">
              <div className="text-[0A3842] font-bold text-xl flex flex-row items-center space-x-3">
                <div className="spinner"></div>
                <h1>Memproses Data...</h1>
              </div>
            </div>
          ) : (
            <IsiKonten status={status} hasil={hasil} confidence={confidence} uploadedImage={uploadedImage} />
          )}
        </div>
      </div>
    </div>
  );
};

const JudulPrediction = () => {
  return (
    <div className="flex justify-end items-center mr-[17rem] space-x-[3rem]">
      <h1 className="text-[0A3842] font-bold text-[4rem]">
        Prediksi Gambar.
      </h1>
    </div>
  );
};

const SubJudulPrediction = () => {
  return (
    <div className="font-bold text-white text-[40px] mb-[3rem]">
      Silahkan Upload
      <br />File Untuk Proses Data
    </div>
  );
};

const ChooseFile = () => {
  return (
    <fieldset>
      <input type="file" name="file" id="file" className="font-bold text-white text-[24px] mb-[2rem]" />
      <div className="bg-white w-[380px] rounded-sm h-[0.1rem]" />
    </fieldset>
  );
};

const styleButton = "w-[200px] h-[54px] mt-[2rem] h-[54px] bg-white rounded-[10px] text-[0A3842] font-medium text-[1.5rem] shine-glow transition-shadow duration-500 ease-in-out";
const TombolUpload = () => {
  return (
    <fieldset>
      <button className={styleButton} type="submit" id="uploadButton">
        Prediksi
      </button>
    </fieldset>
  );
};

const TampilGambar = ({ imageUrl, uploadedImage }) => {
  return (
    <div className="mx-[1.5rem] mt-[2rem] mb-[1rem]">
      <img src={uploadedImage || imageUrl} className="w-[600px] h-[400px]" alt="Prediction result" />
    </div>
  );
};

const NamaPrediksi = ({ hasil, status }) => {
  const statusColor = status.includes('berhasil') ? 'bg-green-700' : 'bg-red-700';
  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-[1rem]">
        <div className="font-bold text-[0A3842] text-[32px] mb-[1rem] pl-[1.5rem]">
          {hasil}
        </div>
      </div>
      {status && <div className={`font-bold text-white text-[24px] pl-[1.5rem] mb-[0.5rem] ${statusColor}`} dangerouslySetInnerHTML={{ __html: status }} />}
    </div>
  );
};

const Confidence = ({ confidence }) => {
  const defaultConfidence = confidence || '0.00';

  return (
    <div className="font-bold text-[0A3842] text-[24px] pl-[1.5rem]">
      Akurasi: {defaultConfidence}
    </div>
  );
};

const Penjelasan = ({ hasil }) => {
  const explanations = {
    "Kepiting": `
      <div>
        Kepiting adalah hewan laut invertebrata yang memiliki tubuh ramping dengan adaptasi untuk berenang. Mereka termasuk dalam kelompok Crustacea dan dapat ditemukan di perairan di seluruh dunia, baik di dekat pantai maupun di laut dalam.
        <br/><br/>
        <strong>Lokasi:</strong> Kepiting sering hidup di perairan dekat pantai atau di dasar laut yang berbatu. Mereka dapat ditemukan di wilayah pesisir, estuari, dan kadang-kadang hidup di sungai yang mengalir ke laut.
        <br/><br/>
        <strong>Siklus Hidup:</strong> Kepiting memiliki siklus hidup yang dimulai dengan tahap larva yang menghabiskan sebagian besar waktu hidupnya di air sebelum bermetamorfosis menjadi kepiting dewasa. Mereka berkembang biak secara seksual, dimana betina melepaskan telur dan jantan melepaskan sperma ke dalam air untuk pembuahan.
        <br/><br/>
        <strong>Ukuran:</strong> Ukuran kepiting bervariasi tergantung pada spesiesnya. Ada yang relatif kecil dengan tubuh hanya beberapa sentimeter lebar, sementara yang lain dapat tumbuh cukup besar dengan cakar-cakar yang kuat untuk memecahkan makanan mereka.
      </div>
    `,
    "Ubur Ubur": `
      <div>
        Ubur-ubur adalah hewan laut invertebrata dengan tubuh seperti payung dan tentakel yang menyengat. Mereka bergerak dengan kontraksi tubuh dan hidup di berbagai lautan, memakan plankton, ikan kecil, dan organisme laut lainnya.
        <br/><br/>
        <strong>Lokasi:</strong> Ubur-ubur dapat ditemukan di berbagai lautan di seluruh dunia, mulai dari perairan dangkal dekat pantai hingga laut dalam. Mereka dapat hidup di lingkungan yang berbeda, termasuk laut tropis, subtropis, dan kutub.
        <br/><br/>
        <strong>Siklus Hidup:</strong> Ubur-ubur memiliki siklus hidup yang kompleks dengan dua bentuk utama: polip yang menetap di dasar laut dan medusa yang berenang bebas. Polip dapat berkembang biak secara aseksual untuk menghasilkan medusa.
        <br/><br/>
        <strong>Ukuran:</strong> Ukuran ubur-ubur bervariasi dari spesies kecil dengan diameter beberapa sentimeter hingga spesies besar seperti ubur-ubur singa dengan diameter lebih dari dua meter.
      </div>
    `,
    "Penguin": `
      <div>
        Penguin adalah burung laut yang tidak bisa terbang dengan tubuh yang ramping dan adaptasi untuk berenang. Mereka hidup di wilayah Arktik dan Antartika, sering kali berkumpul dalam koloni besar di tepi laut atau pulau es. Penguin memakan ikan, krustasea, dan kadang-kadang plankton.
        <br/><br/>
        <strong>Lokasi:</strong> Penguin dapat ditemukan di wilayah Arktik dan Antartika, termasuk pulau-pulau di sekitarnya. Mereka sering bermigrasi dalam pencarian makanan dan untuk berkembang biak di daerah yang lebih hangat di sekitar lintang tengah.
        <br/><br/>
        <strong>Siklus Hidup:</strong> Penguin memiliki siklus hidup yang dimulai dengan penetasan telur di sarang yang terbuat dari batu atau tanah. Anak penguin (anak penguin) menetas dari telur dan dilindungi oleh kedua orang tua. Mereka belajar berenang dan berburu makanan di air sebelum menjadi mandiri.
        <br/><br/>
        <strong>Ukuran:</strong> Ukuran penguin bervariasi dari spesies kecil seperti penguin kecil yang hanya sekitar 40 cm tingginya, hingga penguin raja yang dapat mencapai tinggi lebih dari satu meter.
      </div>
    `,
    "Bulu Babi": `
      <div>
        Bulu babi, atau sea urchin dalam bahasa Inggris, adalah hewan laut invertebrata yang memiliki tubuh bulat dengan ditutupi oleh duri-duri yang tajam. Mereka termasuk dalam kelompok Echinoidea dan hidup di lautan di seluruh dunia, mulai dari perairan dangkal hingga habitat laut dalam.
        <br/><br/>
        <strong>Lokasi:</strong> Bulu babi biasanya ditemukan di dasar laut yang berbatu atau berpasir di berbagai perairan di seluruh dunia. Mereka sering hidup di lingkungan seperti terumbu karang, pantai berbatu, dan hutan rumput laut.
        <br/><br/>
        <strong>Siklus Hidup:</strong> Bulu babi mengalami siklus hidup yang dimulai dengan tahap larva yang berenang bebas sebelum menetap di dasar laut. Mereka berkembang biak secara seksual dengan melepaskan sperma dan telur ke dalam air, di mana pembuahan terjadi.
        <br/><br/>
        <strong>Ukuran:</strong> Ukuran bulu babi bervariasi tergantung pada spesiesnya. Ada yang sangat kecil dengan diameter hanya beberapa sentimeter, sementara yang lain dapat tumbuh lebih besar dengan duri-duri yang mencapai beberapa inci.
      </div>
    `,
    "Bintang Laut": `
      <div>
        Bintang laut, atau starfish dalam bahasa Inggris, adalah hewan laut invertebrata yang memiliki bentuk seperti bintang dengan lengan-lengan yang menonjol. Mereka termasuk dalam kelompok echinodermata dan hidup di dasar laut di seluruh dunia, dari perairan dangkal hingga kedalaman laut yang dalam.
        <br/><br/>
        <strong>Lokasi:</strong> Bintang laut dapat ditemukan di berbagai perairan laut di seluruh dunia, mulai dari pantai berbatu hingga dasar laut yang berpasir. Mereka sering kali berada di lingkungan yang keras seperti karang, batu, atau reruntuhan di dasar laut.
        <br/><br/>
        <strong>Siklus Hidup:</strong> Bintang laut memiliki siklus hidup yang unik, dimulai dengan tahap larva yang berenang bebas sebelum menetap dan tumbuh menjadi bentuk dewasa. Mereka berkembang biak secara seksual dengan melepaskan sperma dan telur ke air, di mana pembuahan terjadi.
        <br/><br/>
        <strong>Ukuran:</strong> Ukuran bintang laut bervariasi tergantung pada spesiesnya. Ada yang kecil dengan diameter hanya beberapa sentimeter, sementara ada yang besar dengan lengan yang bisa mencapai lebih dari setengah meter.
      </div>
    `,
    "default": `
      Harap unggah gambar yang jelas dan tidak buram (blur).
    `
  };

  const explanation = explanations[hasil] || explanations["default"];

  return (
    <div className="font-medium text-[0A3842] text-[20px] pl-[1.5rem] w-[39rem]" dangerouslySetInnerHTML={{ __html: explanation }} />
  );
};

const IsiKonten = ({ status, hasil, confidence, uploadedImage }) => {
  return (
    <div className="w-[650px] h-auto pb-10 bg-white rounded-[10px]">
      <TampilGambar imageUrl={imageUrl} uploadedImage={uploadedImage} />
      <NamaPrediksi hasil={hasil} status={status} />
      <Confidence confidence={confidence} />
      <Penjelasan hasil={hasil} />    
    </div>
  );
};

export default Prediction;
