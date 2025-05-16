import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useIdleTimeout from "./hooks/useIdleTimeout";
import Home from "./pages/Home";
import News from "./pages/News";
import QandA from "./pages/QandA";
import AllQuestions from "./pages/AllQuestionPage";
import MySpace from "./pages/MySpace";
import Planning from "./pages/Planning";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminNewsForm from "./pages/AdminNewsForm";
import Conferences from "./pages/Conferences";
import Dashboard from "./pages/DashboardConferences";
import DashboardAdmin from "./pages/DashboardAdmin"; // ✅
import DashboardBasico from "./pages/DashboardBasico"; // ✅ NUEVO
import DashboardEmpresarial from "./pages/DashboardEmpresarial"; // ✅ NUEVO
import DashboardCorporativo from "./pages/DashboardCorporativo"; // ✅ NUEVO
import OradorHome from "./pages/OradorHome";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoutes from "./components/ProtectedRoutes";
// import AutoRedirect from "./components/AutoRedirect";
import FormularioCompra from "./pages/FormularioCompra"; // ✅
import { PayPalScriptProvider } from "@paypal/react-paypal-js"; // ✅ PayPal agregado
import "./services/firebase";

const AppRoutes = () => {
  useIdleTimeout();

  return (
    <>
      {/* <AutoRedirect /> ✅ Aquí montamos AutoRedirect */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/qanda" element={<QandA />} />
        <Route path="/all-questions" element={<AllQuestions />} />
        <Route
          path="/adminNews"
          element={
            <ProtectedRoutes requireAdmin={true}>
              <AdminNewsForm />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/myspace"
          element={
            <ProtectedRoutes>
              <MySpace />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/planning"
          element={
            <ProtectedRoutes>
              <Planning />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/oradorhome"
          element={
            <ProtectedRoutes requireOrador={true}>
              <OradorHome />
            </ProtectedRoutes>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/conferences" element={<Conferences />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/formulario-compra" element={<FormularioCompra />} />

        {/* ✅ Dashboard del Admin */}
        <Route
          path="/dashboard-admin"
          element={
            <ProtectedRoutes requireAdmin={true}>
              <DashboardAdmin />
            </ProtectedRoutes>
          }
        />

        {/* ✅ Dashboards por tipo de plan */}
        <Route
          path="/dashboard-basico"
          element={
            <ProtectedRoutes>
              <DashboardBasico />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/dashboard-empresarial"
          element={
            <ProtectedRoutes>
              <DashboardEmpresarial />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/dashboard-corporativo"
          element={
            <ProtectedRoutes>
              <DashboardCorporativo />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
};

export const App = () => {
  return (
    <AuthProvider>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AQPAdKfm4bHYBhPa7oVBcauR8RTxUoVq4mTVY4PZQMzD23OqCoY829KkvobEkn2TP-4Bza95_cTUFlqz",
        }}
      >
        {" "}
        {/* ✅ Aquí envolvemos todo con PayPal */}
        <Router>
          <AppRoutes />
        </Router>
      </PayPalScriptProvider>
    </AuthProvider>
  );
};

export default App;
