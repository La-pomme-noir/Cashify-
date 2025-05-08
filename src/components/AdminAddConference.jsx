import React, { useState } from "react";
import { db } from "../services/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const AdminAddConference = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const parsedDate = new Date(date);
      if (isNaN(parsedDate.getTime())) {
        throw new Error("Fecha inválida");
      }

      await addDoc(collection(db, "videoconferencias"), {
        title,
        link,
        date: Timestamp.fromDate(new Date(date)), // 👈 Usar Timestamp correcto
        createdAt: Timestamp.now(),
      });
      

      setTitle("");
      setLink("");
      setDate("");
      setStatus("✅ Videoconferencia agregada exitosamente.");
    } catch (error) {
      console.error("Error al agregar videoconferencia:", error);
      setStatus("❌ Error al agregar. Inténtalo nuevamente.");
    }
  };

  return (
    <div className="shadow-cards contenedor admin-add-conference">
      <h2 className="titles-sections">➕ Agregar Nueva Videoconferencia</h2>

      <form onSubmit={handleSubmit} className="admin-form">
        <input
          type="text"
          placeholder="Título de la conferencia"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="admin-input"
        />
        <input
          type="url"
          placeholder="Enlace (URL)"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
          className="admin-input"
        />
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="admin-input"
        />
        <button type="submit" className="btn btn__emerald">
          Agregar
        </button>
      </form>

      {status && <p className="admin-status">{status}</p>}
    </div>
  );
};

export default AdminAddConference;
