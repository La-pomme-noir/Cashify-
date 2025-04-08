import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import QandA from './pages/QandA';
import MySpace from './pages/MySpace';
import Planning from './pages/Planning'; 
import Login from './pages/Login';
import Register from './pages/Register';
import AdminNewsForm from './pages/AdminNewsForm';
import Conferences from "./pages/Conferences";
import DashboardConferences from "./pages/DashboardConferences";


import { AuthProvider } from './context/AuthContext';
import ProtectedRoutes from './components/ProtectedRoutes';

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/qanda" element={<QandA />} />
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
          {/* Única definición para /conferences, sin ProtectedRoutes por ahora */}
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<DashboardConferences />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;