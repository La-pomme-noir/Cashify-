import React, { useEffect, useState } from "react";
import { db } from "../services/firebase";
import {
  collection,
  onSnapshot,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";

const AdminConferenceTable = () => {
  const [conferences, setConferences] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [edited, setEdited] = useState({});

  useEffect(() => {
    const q = query(collection(db, "videoconferencias"), orderBy("date", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setConferences(data);
    });

    return () => unsubscribe();
  }, []);

  const startEdit = (id, data) => {
    setEditingId(id);
    setEdited({
      title: data.title,
      link: data.link,
      date: new Date(data.date.seconds * 1000).toISOString().slice(0, 16),
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEdited({});
  };

  const saveEdit = async (id) => {
    try {
      await updateDoc(doc(db, "videoconferencias", id), {
        title: edited.title,
        link: edited.link,
        date: new Date(edited.date),
      });
      cancelEdit();
    } catch (error) {
      console.error("Error actualizando:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "videoconferencias", id));
    } catch (error) {
      console.error("Error eliminando:", error);
    }
  };

  return (
    <section className="shadow-cards contenedor" style={{ marginTop: "2rem" }}>
      <h2 className="titles-sections">🗓️ Gestión de Videoconferencias</h2>

      <div style={{ overflowX: "auto" }}>
        <table style={{
          width: "100%",
          marginTop: "2rem",
          borderCollapse: "collapse",
          backgroundColor: "var(--white)",
          borderRadius: "1rem",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        }}>
          <thead style={{ backgroundColor: "var(--seagreen)", color: "var(--white)", fontFamily: "var(--fuenteHeading)" }}>
            <tr>
              <th style={{ padding: "1rem" }}>Fecha</th>
              <th style={{ padding: "1rem" }}>Título</th>
              <th style={{ padding: "1rem" }}>Enlace</th>
              <th style={{ padding: "1rem" }}>Acciones</th>
            </tr>
          </thead>

          <tbody style={{ fontFamily: "var(--fuenteParrafo)", fontSize: "1.6rem" }}>
            {conferences.map((conf) =>
              editingId === conf.id ? (
                <tr key={conf.id}>
                  <td style={{ padding: "1rem" }}>
                    <input
                      type="datetime-local"
                      value={edited.date}
                      onChange={(e) => setEdited({ ...edited, date: e.target.value })}
                      style={{ width: "100%", padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #ccc" }}
                    />
                  </td>
                  <td style={{ padding: "1rem" }}>
                    <input
                      type="text"
                      value={edited.title}
                      onChange={(e) => setEdited({ ...edited, title: e.target.value })}
                      style={{ width: "100%", padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #ccc" }}
                    />
                  </td>
                  <td style={{ padding: "1rem" }}>
                    <input
                      type="url"
                      value={edited.link}
                      onChange={(e) => setEdited({ ...edited, link: e.target.value })}
                      style={{ width: "100%", padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #ccc" }}
                    />
                  </td>
                  <td style={{ padding: "1rem", display: "flex", gap: "0.5rem", justifyContent: "center" }}>
                    <button
                      className="btn btn__emerald"
                      style={{ padding: "0.5rem 1rem" }}
                      onClick={() => saveEdit(conf.id)}
                    >
                      Guardar
                    </button>
                    <button
                      className="btn btn__emerald"
                      style={{ backgroundColor: "var(--rojo)", padding: "0.5rem 1rem" }}
                      onClick={cancelEdit}
                    >
                      Cancelar
                    </button>
                  </td>
                </tr>
              ) : (
                <tr key={conf.id}>
                  <td style={{ padding: "1rem", textAlign: "center" }}>{new Date(conf.date.seconds * 1000).toLocaleString()}</td>
                  <td style={{ padding: "1rem", textAlign: "center" }}>{conf.title}</td>
                  <td style={{ padding: "1rem", textAlign: "center" }}>
                    <a href={conf.link} target="_blank" rel="noreferrer" style={{ color: "var(--seagreen)", fontWeight: "bold" }}>
                      Ver
                    </a>
                  </td>
                  <td style={{ padding: "1rem", display: "flex", gap: "0.5rem", justifyContent: "center" }}>
                    <button
                      className="btn btn__emerald"
                      style={{ padding: "0.5rem 1rem" }}
                      onClick={() => startEdit(conf.id, conf)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn__emerald"
                      style={{ backgroundColor: "var(--rojo)", padding: "0.5rem 1rem" }}
                      onClick={() => handleDelete(conf.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminConferenceTable;
