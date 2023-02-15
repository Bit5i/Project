import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Bodyy from './components/Bodyy';
import Slider from './components/Slider';
// import Fader from './components/Fader';
import Footer from './components/Footer';
import Cards from './components/Cards';
// import Fade from 'react-reveal/Fade'; 


function App() {
  return (
    <>

    <div className='page-container'>
      <div className='content-wrap'>

      {/* <Fade>
      <img className='css' src="https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/x-series/x1/2023/x1-header-banner-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1674564361037.jpg" alt="logo" />
        </Fade> */}
    
    <Header/>
    <Bodyy/>
    {/* <Fader/> */}
    </div>
    <Cards/>
    <Slider/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
