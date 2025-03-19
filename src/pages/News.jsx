import React from 'react';
import Header from '../components/Header';
import NavbarNews from '../components/NavbarNews';
import Footer from '../components/Footer';
import NewsSection from '../components/NewsSection';
import Articles from '../view/Articles';
import Tips from '../view/Tips';
import TrendsCarousel from '../components/TrendsCarousel';
import MarketUpdates from '../components/MarketUpdates';
import TrendsGestion from '../components/TrendsGestion';
import TrendsInversiones from '../components/TrendsInversiones';
import NewsSectionDay from '../components/NewsSectionDay';
import '../styles/style-news.css';

export const News = () => {
  return (
    <div>
      <Header />
      <NavbarNews />
      <NewsSection />
      <NewsSectionDay />
      <main className="contenedor">
        <div className="noticias">
          {/* <Articles /> */}
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
          </div> {/*Fin noticias__informacion */}
          {/* <Tips /> */}
        </div> {/*Fin noticias */}
        <nav id="navbar-consejos" className="navbar px-3 mb-3 sticky-top navbar__finanzas">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active navbar__links" href="#articulos">
                Articulos
              </a>
            </li> {/*Fin nav-item */}
            <li className="nav-item">
              <a className="nav-link navbar__links" href="#consejos">
                Consejos
              </a>
            </li> {/*Fin nav-item */}
          </ul> {/*Fin nav-tabs */}
        </nav> {/*Fin navbar-consejos */}
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-consejos"
          data-bs-smooth-scroll="true"
          className="scrollspy-example p-3"
          tabIndex="0"
        ></div>
        {/* <TrendsCarousel category="Análisis de Tendencias Financieras"/>
        <MarketUpdates category="Actualizaciones del Mercado"/>
        <TrendsGestion category="Gestión del dinero personal"/>
        <TrendsInversiones category="Inversiones y crecimiento financiero"/> */}
      </main> {/*Fin contenedor */}
      <Footer />
    </div>
  );
};

export default News;