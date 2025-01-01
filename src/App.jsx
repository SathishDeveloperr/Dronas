import './App.css';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';
import Nav from './Nav';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Paral from './Paral';
import FinalModel from './FinalModel';
import Contact from './Contact';
import CardSection from './CardSection';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
      <Nav onNavClick={handleNavClick} />
      <div className="container-fluid">
        <div className="row">
          <div id="home"   className="col-md-12" style={{backgroundColor:'#EDDFE0'}}>
            <div className="row">
              <div  unselectable='' className="col-md-6 col-sm-12 text-center" style={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <h5 data-aos="zoom-in" data-aos-duration="500" style={{fontSize: '200px', color: 'black'}}>Drona's</h5>
                <p data-aos="zoom-out" data-aos-duration="800" style={{color: 'black'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              </div>
              <div className="col-md-6 col-sm-12" style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <FinalModel />
              </div>
            </div>
          </div>
          <div id="about" className="col-md-12">
            <div className="row" style={{height: '70vh', display: 'flex', alignItems: 'center', backgroundColor:'#EFF3EA'}}>
              <div className="col-md-6 text-center">
                <img data-aos="zoom-in-right" data-aos-duration="800" src="/images/DronerAbout.png" alt="" style={{maxWidth: '70%', height: 'auto', objectFit: 'cover'}} />
              </div>
              <div className="col-md-6 text-center">
                <h1 data-aos="zoom-in-left" data-aos-duration="800" >About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              </div>
            </div>
          </div>

          <div id="products" className="col-md-12" style={{height:'70vh', display:'flex', flexDirection:'column', alignItems:'center', backgroundColor:'#FFFDF0'}}>
            <h1 style={{marginTop:'100px'}} data-aos="zoom-in-left" >Our Products</h1>
            <CardSection />
          </div>

          <div id="contact" className="col-md-12" style={{height:'70vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', backgroundColor:'#EFF3EA'}}>
            <Contact />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
