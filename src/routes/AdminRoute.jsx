import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminRoute = ({ children }) => {
  const { currentUser, userData } = useAuth();

  if (!currentUser || userData?.role !== "administrador") {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AdminRoute;
