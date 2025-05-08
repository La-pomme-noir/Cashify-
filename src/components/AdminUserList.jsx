import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";
import "../styles/AdminUserList.css";

const AdminUserList = () => {
  const [users, setUsers] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="admin-users">
      <button className="toggle-btn" onClick={() => setExpanded(!expanded)}>
        {expanded ? "🔽 Ocultar Usuarios" : "▶ Mostrar Usuarios"}
      </button>

      {expanded && (
        <div className="user-table-container">
          <table className="user-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Plan Activo</th>
                <th>Rol</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.username || "—"}</td>
                  <td>{user.email}</td>
                  <td>{user.planActivo || "—"}</td>
                  <td>{user.role || "usuario"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminUserList;
