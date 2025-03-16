import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from '../../components/Carousel/Carousel';
import AboutUs from '../../components/AboutUs/AboutUs';
import Services from '../../components/Services/Services';
import Contact from '../../components/Contact/Contact';
import '../styles/style-home.css';

const Home = () => {
  return (
    <div>
      <header className="header">
        <a href="/">
          <img
            className="header__logo header__logo--animacion"
            src="/images/logoCashify10.png"
            alt="Logo Cashify"
          />
        </a>
      </header>

      <Navbar />

      <main className="contenedor">
        <Carousel />
        <AboutUs />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Home;