import React, { useState, useEffect } from "react";
import { db, auth } from "../services/firebase";
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import "../styles/Feedback.css";

const Feedback = () => {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState("");

  useEffect(() => {
    const q = query(collection(db, "feedback"), orderBy("fecha", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const feedbackData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setComentarios(feedbackData);
    });

    return () => unsubscribe();
  }, []);

  const enviarComentario = async () => {
    if (!nuevoComentario.trim()) return;
    const user = auth.currentUser;
    if (!user) return alert("Debes iniciar sesión para enviar feedback.");

    await addDoc(collection(db, "feedback"), {
      uid: user.uid,
      comentario: nuevoComentario,
      fecha: new Date()
    });

    setNuevoComentario("");
  };

  return (
    <section className="dashboard-section feedback-section">
      <h2 className="section-title">🗣️ Feedback de Usuarios</h2>

      <div className="feedback-form">
        <textarea
          placeholder="Escribe tu opinión..."
          value={nuevoComentario}
          onChange={(e) => setNuevoComentario(e.target.value)}
        />
        <button onClick={enviarComentario}>Enviar</button>
      </div>

      <div className="feedback-list">
        {comentarios.map((comentario) => (
          <div key={comentario.id} className="feedback-item">
            <p>{comentario.comentario}</p>
            <span>{new Date(comentario.fecha.seconds * 1000).toLocaleString()}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feedback;
