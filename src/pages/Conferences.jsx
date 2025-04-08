import React, { useEffect, useRef, useState } from "react";
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Peer from "peerjs";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";
import DashboardConferences from './DashboardConferences'; // Solo si ya lo tienes
import '../styles/style-conference.css';

const Conferences = () => {
  const [peerId, setPeerId] = useState('');
  const [remoteId, setRemoteId] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const myVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const peer = new Peer();

    peer.on('open', (id) => {
      setPeerId(id);
    });

    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      if (myVideoRef.current) {
        myVideoRef.current.srcObject = stream;
      }

      peer.on('call', (call) => {
        call.answer(stream);
        call.on('stream', (remoteStream) => {
          if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = remoteStream;
          }
        });
      });
    });

    return () => peer.destroy();
  }, []);

  const callUser = () => {
    const peer = new Peer();
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      const call = peer.call(remoteId, stream);
      call.on('stream', (remoteStream) => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = remoteStream;
        }
      });
    });
  };

  // 🔁 Render condicional
  if (isLoggedIn) {
    return <DashboardConferences />;
  }

  return (
    <>
      <Header />
      <Navbar />
      <div className="conference-container">
        <section className="welcome-section">
          <h1>Sección de Videoconferencias</h1>
          <p>Explora nuestra plataforma de videoconferencias para profesionales en gestión financiera. Aprende de expertos del sector y mantente al día con las últimas tendencias.</p>
          <div className="btn-group">
            <button className="primary-btn">Acción principal</button>
            <button className="secondary-btn">Acción secundaria</button>
          </div>
        </section>

        <section className="gallery-section">
          <div className="gallery">
            {[...Array(6)].map((_, i) => (
              <div className="gallery-item" key={i}></div>
            ))}
          </div>
        </section>

        <section className="video-call-section">
          <div className="videos">
            <div>
              <h2>Mi video</h2>
              <video ref={myVideoRef} autoPlay playsInline muted></video>
            </div>
            <div>
              <h2>Video remoto</h2>
              <video ref={remoteVideoRef} autoPlay playsInline></video>
            </div>
          </div>
          <div className="call-controls">
            <p>Tu ID: <strong>{peerId}</strong></p>
            <input
              type="text"
              value={remoteId}
              onChange={(e) => setRemoteId(e.target.value)}
              placeholder="ID del otro usuario"
            />
            <button onClick={callUser}>Llamar</button>
          </div>
        </section>

        <section className="info-banner">
          <h2>Únete a las Videoconferencias de Cashify</h2>
          <p>Aprende de expertos financieros y mejora tus habilidades en gestión financiera.</p>
          <button className="primary-btn">Regístrate ahora</button>
        </section>

        <section className="pricing-plan">
          <h2>Planes de precios</h2>
          <p>Elige el plan perfecto para ti. Aprende de forma inteligente, clara y constante, adaptándote con nosotros.</p>
          <div className="plan-toggle">
            <button>Mensual</button>
            <button>Anual</button>
          </div>
          <div className="plans">
            <div className="plan">
              <h3>Plan Básico</h3>
              <p className="price">$20/mes</p>
              <ul>
                <li>✔ Acceso básico</li>
                <li>✔ 1 sesión semanal</li>
                <li>✔ Chat estándar</li>
              </ul>
              <button className="outline-btn">Comenzar</button>
            </div>
            <div className="plan popular">
              <h3>Plan Empresarial</h3>
              <p className="price">$29/mes</p>
              <ul>
                <li>✔ 3 sesiones semanales</li>
                <li>✔ Herramientas de chat avanzadas</li>
                <li>✔ Análisis de retroalimentación</li>
              </ul>
              <button className="filled-btn">Comenzar</button>
            </div>
            <div className="plan">
              <h3>Plan Corporativo</h3>
              <p className="price">$49/mes</p>
              <ul>
                <li>✔ Sesiones ilimitadas</li>
                <li>✔ Acceso completo para el equipo</li>
                <li>✔ Datos e insights</li>
              </ul>
              <button className="filled-btn">Comenzar</button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Conferences;
