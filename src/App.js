import './App.css';
import HeaderSection from './HeaderSection';
import MainHeroSection from './MainHeroSection';
import About from './About';
import ObjectiveArchitecture from './ObjectiveArchitecture';
import AllTeam from './AllTeam';
import Prediction from './Prediction';

function App() {
  const imageUrl  = '../BgMain.png';
  return (
    <div id="dashboard" className="absolute inset-0 bg-cover h-[2400px]">
      <HeaderSection />
      <div className="relative z-10">
        <MainHeroSection />
        <About id="about" />
        <ObjectiveArchitecture id="sistem"/>
        <AllTeam id="teams" />
        <Prediction id="prediction" />
      </div>
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="absolute bottom-0 inset-x-0 h-[206px] w-auto bg-white z-0"
          style={{ background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)' }} />
      </div>
    </div>
  );
}

export default App;
