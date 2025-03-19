import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import QandA from './pages/QandA';
// import { Conferences } from './pages/Conferences';
// import { MySpace } from './pages/MySpace';
import Login from './pages/Login';
import Register from './pages/Register';
// import { Profile } from './pages/Profile';
// import { Dashboard } from './pages/Dashboard';
// import { NotFound } from './pages/NotFound';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoutes from './components/ProtectedRoutes';
import AdminNewsForm from './pages/AdminNewsForm';

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/news" element={<News />} /> 
          <Route path="/qanda" element={<QandA />} /> 
          <Route path="/adminNews" element={<AdminNewsForm />}/>
          {/* <ProtectedRoutes/> */}
          {/* <Route path="/conferences" element={<Conferences />} />  */}
          {/* <Route path="/myspace" element={<MySpace />} />  */}
          {/* <ProtectedRoutes/> */}
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
          {/* <Route path="/profile" element={<Profile />} />  */}
          {/* <Route path="/dashboard" element={<Dashboard />} />  */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;