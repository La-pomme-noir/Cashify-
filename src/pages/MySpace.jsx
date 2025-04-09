// src/pages/MySpace.jsx
import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Añade esta importación
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/MySpace.css';

const MySpace = () => {
  const { user } = useAuth(); // Ahora debería funcionar

  const toggleSubmenu = (e) => {
    e.preventDefault();
    const submenu = e.target.nextElementSibling;
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
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
          <a href="#" className="navegacion__enlaces" onClick={toggleSubmenu}>
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

      {/* Foro Header */}
      <div className="foro-header">
        <div className="content">
          <h1>MI ESPACIO</h1>
          <p>Bienvenidos a tu espacio de Cashify</p>
        </div>
      </div>

      {/* Contenedor Principal */}
      <Container className="mt-4">
        <Card className="p-3 shadow-sm bg-light">
          <p className="text-center text-muted">
            Selecciona una de las siguientes opciones para acceder a las herramientas financieras.
          </p>
          <Row className="text-center">
            <Col md={6} className="mb-3">
              <Card className="p-2 bg-success text-white">
                <Link to="/myspace/calculator" className="btn text-white fw-bold">
                  Calculadora
                </Link>
                <p className="text-white-50">
                  Realiza cálculos financieros de manera sencilla.
                </p>
              </Card>
            </Col>
            <Col md={6} className="mb-3">
              <Card className="p-2 bg-success text-white">
                <Link to="/myspace/simulator" className="btn text-white fw-bold">
                  Simulador
                </Link>
                <p className="text-white-50">
                  Simula escenarios financieros y toma mejores decisiones.
                </p>
              </Card>
            </Col>
            <Col md={6} className="mb-3">
              <Card className="p-2 bg-success text-white">
                <Link to="/myspace/planning" className="btn text-white fw-bold">
                  Planificación Financiera
                </Link>
                <p className="text-white-50">
                  Organiza tu presupuesto y metas de ahorro.
                </p>
              </Card>
            </Col>
            <Col md={6} className="mb-3">
              <Card className="p-2 bg-success text-white">
                <Link to="/myspace/accounts" className="btn text-white fw-bold">
                  Mis Cuentas
                </Link>
                <p className="text-white-50">
                  Gestiona y revisa tus cuentas personales.
                </p>
              </Card>
            </Col>
            <Col md={12} className="mb-3">
              <Card className="p-2 bg-success text-white">
                <Link to="/myspace/profile" className="btn text-white fw-bold">
                  Perfil
                </Link>
                <p className="text-white-50">
                  Administra tu información y preferencias.
                </p>
              </Card>
            </Col>
          </Row>
        </Card>
      </Container>

      {/* Pie de Página */}
      <Footer />
    </div>
  );
};

export default MySpace;