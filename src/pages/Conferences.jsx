import React, { useEffect, useRef, useState } from "react";
import Header from '../components/Header';
import Navbar from '../components/Navbar'; // o NavbarMySpace si usas ese
import Footer from '../components/Footer';
import Peer from "peerjs";
import '../styles/style-conference.css';


const Conferences = () => {
  const [peerId, setPeerId] = useState('');
  const [remoteId, setRemoteId] = useState('');
  const myVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

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

  return (
    <>
      <Header />
      <Navbar />
      <div className="conference-container">
        <section className="welcome-section">
          <h1>Welcome to Cashify’s Conference Section</h1>
          <p>Explore our video conference platform for financial management professionals. Learn from industry experts and stay updated on the latest trends.</p>
          <div className="btn-group">
            <button className="primary-btn">Main action</button>
            <button className="secondary-btn">Secondary action</button>
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
              <h2>Remoto</h2>
              <video ref={remoteVideoRef} autoPlay playsInline></video>
            </div>
          </div>
          <div className="call-controls">
            <p>Tu ID: <strong>{peerId}</strong></p>
            <input type="text" value={remoteId} onChange={(e) => setRemoteId(e.target.value)} placeholder="ID del otro usuario" />
            <button onClick={callUser}>Llamar</button>
          </div>
        </section>

        <section className="info-banner">
          <h2>Join Cashify’s Video Conferences</h2>
          <p>Learn from financial experts and grow your financial management skills.</p>
          <button className="primary-btn">Sign up now</button>
        </section>

        <section className="pricing-plan">
          <h2>Pricing plan</h2>
          <p>Choose the perfect plan for you. Learn smart, clear and wise, continuously adapting with us.</p>
          <div className="plan-toggle">
            <button>Monthly</button>
            <button>Yearly</button>
          </div>
          <div className="plans">
            <div className="plan">
              <h3>Basic plan</h3>
              <p className="price">$20/mo</p>
              <ul>
                <li>✔ Basic access</li>
                <li>✔ 1 session weekly</li>
                <li>✔ Standard chat</li>
              </ul>
              <button className="outline-btn">Get started</button>
            </div>
            <div className="plan popular">
              <h3>Business plan</h3>
              <p className="price">$29/mo</p>
              <ul>
                <li>✔ 3 sessions weekly</li>
                <li>✔ Pro chat tools</li>
                <li>✔ Feedback analytics</li>
              </ul>
              <button className="filled-btn">Get started</button>
            </div>
            <div className="plan">
              <h3>Enterprise plan</h3>
              <p className="price">$49/mo</p>
              <ul>
                <li>✔ Unlimited sessions</li>
                <li>✔ Full team access</li>
                <li>✔ Insights & data</li>
              </ul>
              <button className="filled-btn">Get started</button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Conferences;
