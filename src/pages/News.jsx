import React from 'react';
import Header from '../components/Header';
import NavbarNews from '../components/NavbarNews';
import Footer from '../components/Footer';
import NewsSection from '../components/NewsSection';
import Articles from '../components/Articles';
import Tips from '../components/Tips';
import TrendsCarousel from '../components/TrendsCarousel';
import MarketUpdates from '../components/MarketUpdates';
import '../styles/style-news.css';

export const News = () => {
  return (
    <div>
      <Header />
      <NavbarNews />
      <NewsSection />
      <main className="contenedor">
        <div className="noticias">
          <Articles />
          <div className="noticias__informacion shadow-cards shadow__cards--bg">
            <img src="/images/noticias-blog.jpg" alt="Noticias blog" />
            <span className="noticias__span">
              17 mar 2025 <li className="noticias__li">- 2 Min. de lectura</li>
            </span>
            <a className="noticias__link" href="#">
              <h3 className="noticias__title">La importancia de la gestión financiera</h3>
              <p className="noticias__parrafo">
                La gestión financiera no solo es clave para garantizar la estabilidad económica personal y empresarial, sino que también desempeña un papel
                fundamental en la construcción de un futuro próspero.
              </p>
            </a>
          </div>
          <Tips />
        </div> {/*Fin noticias */}
        <TrendsCarousel />
        <MarketUpdates />
      </main> {/*Fin contenedor */}
      <Footer />
    </div>
  );
};

export default News;