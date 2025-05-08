import React, { useState } from "react";
import "../styles/ChatBasico.css"; // Asegúrate de tener este archivo CSS

const ChatBasico = () => {
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);

  const enviarMensaje = (e) => {
    e.preventDefault();
    if (!mensaje.trim()) return;

    const nuevo = {
      id: Date.now(),
      texto: mensaje,
      autor: "Tú"
    };

    setMensajes([...mensajes, nuevo]);
    setMensaje("");
  };

  return (
    <section className="dashboard__section chat-card">
      <h2 className="section-title">💬 Chat </h2>
      <div className="chat-mensajes">
        {mensajes.map((msg) => (
          <div key={msg.id} className="chat-mensaje">
            <strong>{msg.autor}:</strong> {msg.texto}
          </div>
        ))}
        {mensajes.length === 0 && <p>Únete al chat.</p>}
      </div>
      <form onSubmit={enviarMensaje} className="chat-form">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default ChatBasico;
