// src/pages/Calculator.jsx
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import '../styles/Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');

  const agregarNumero = (value) => {
    setDisplay((prev) => (prev === '0' ? value : prev + value));
  };

  const agregarOperador = (operator) => {
    setDisplay((prev) => (prev === '0' ? '0' : prev + operator));
  };

  const calcular = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const limpiar = () => {
    setDisplay('0');
  };

  const regresar = () => {
    setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
  };

  return (
    <div>
      {/* Barra de Navegación */}
      <NavBar />

      {/* Encabezado */}
      <header className="header">
        <Link to="/">
          <img
            className="header__logo header__logo--animacion"
            src="/images/logoCashify10.png"
            alt="Logo Cashify"
          />
        </Link>
      </header>

      {/* Barra de Navegación */}
      <nav className="navegacion">
        <Link className="navegacion__enlaces navegacion__enlaces--activo" to="/">
          Inicio
        </Link>
        <div className="navegacion__submenu">
          <a href="#" className="navegacion__enlaces" onClick={(e) => e.preventDefault()}>
            Noticias <i className="bi bi-arrow-down-short"></i>
          </a>
          <div className="navegacion__submenu--contenido">
            <Link to="/news">Todo</Link>
            <Link to="/news/articles">Artículos</Link>
            <Link to="/news/tips">Consejos</Link>
          </div>
        </div>
        <Link className="navegacion__enlaces" to="/qanda">
          Foro Financiero
        </Link>
        <Link className="navegacion__enlaces" to="/myspace">
          Mi Espacio
        </Link>
        <Link className="navegacion__enlaces" to="/conferences">
          VideoConferencias
        </Link>
        <Link className="navegacion__enlaces navegacion__enlaces--botones" to="/login">
          Iniciar Sesión
        </Link>
        <Link className="navegacion__enlaces navegacion__enlaces--botones" to="/register">
          Registrarse
        </Link>
      </nav>

      {/* Contenedor de la Calculadora */}
      <Container className="calculadora-container">
        <div className="calculadora">
          <input type="text" className="pantalla" value={display} readOnly />
          <div className="botones">
            <button className="boton" onClick={() => agregarNumero('7')}>7</button>
            <button className="boton" onClick={() => agregarNumero('8')}>8</button>
            <button className="boton" onClick={() => agregarNumero('9')}>9</button>
            <button className="boton operador" onClick={() => agregarOperador('/')}>/</button>
            <button className="boton" onClick={() => agregarNumero('4')}>4</button>
            <button className="boton" onClick={() => agregarNumero('5')}>5</button>
            <button className="boton" onClick={() => agregarNumero('6')}>6</button>
            <button className="boton operador" onClick={() => agregarOperador('*')}>*</button>
            <button className="boton" onClick={() => agregarNumero('1')}>1</button>
            <button className="boton" onClick={() => agregarNumero('2')}>2</button>
            <button className="boton" onClick={() => agregarNumero('3')}>3</button>
            <button className="boton operador" onClick={() => agregarOperador('-')}>-</button>
            <button className="boton" onClick={() => agregarNumero('0')}>0</button>
            <button className="boton" onClick={limpiar}>C</button>
            <button className="boton igual" onClick={calcular}>=</button>
            <button className="boton operador" onClick={() => agregarOperador('+')}>+</button>
            <button className="boton volver" onClick={regresar}>↩</button>
          </div>
        </div>
      </Container>

      {/* Pie de Página */}
      <Footer />
    </div>
  );
};

export default Calculator;