import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Contact from '../components/Contact';
import '../styles/style-home.css';

export const Home = () => {
  return (
    <div>
      <Header />

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