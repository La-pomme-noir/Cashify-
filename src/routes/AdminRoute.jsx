import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ← Asegúrate de que esta ruta es correcta

const AdminRoute = ({ children }) => {
  const { currentUser, userData } = useAuth(); // ← Esto asegura que userData sí esté definido

  if (!currentUser || userData?.role !== "admin") {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AdminRoute;
