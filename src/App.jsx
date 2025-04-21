import React, { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import HeroSec from './components/HeroSection/HeroSec'
import AOS from "aos";
import "aos/dist/aos.css";
import Product from './components/Product/Product';
import TopProduct from './components/TopProduct/TopProduct';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Sliders from './components/Slider/Sliders';
import Footer from './components/Footer/Footer';
import PopUp from './components/PopUp/PopUp';




function App() {

  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white static dark:bg-gray-900 dark:text-white duration-200">
      <NavBar handleOrderPopup={handleOrderPopup}/>
      <HeroSec handleOrderPopup={handleOrderPopup}/>
      <Product />
      <TopProduct handleOrderPopup={handleOrderPopup}/>
      <Banner />
      <Subscribe />
      <Product />
      <Sliders />
      <Footer />
      <PopUp orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default App
