import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import QandA from './pages/QandA';
// import { Conferences } from './pages/Conferences';
import MySpace from './pages/MySpace';
import Calculator from './pages/Calculator';
import Login from './pages/Login';
import Register from './pages/Register';
// import { Profile } from './pages/Profile';
// import { Dashboard } from './pages/Dashboard';
// import { NotFound } from './pages/NotFound';
import { AuthProvider } from '../context/AuthContext';


//import Calculator from './pages/Calculator';
//import Simulator from './pages/Simulator';
//import Planning from './pages/Planning';
//import Accounts from './pages/Accounts';

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/qanda" element={<QandA />} />
          <Route path="/myspace" element={<MySpace />} />
          <Route path="/myspace/calculator" element={<Calculator />} />
          <Route path="/myspace/accounts" element={<Accounts />} />
          <Route path="/myspace/planning" element={<Planning />} />
          <Route path="/myspace/simulator" element={<Simulator />} />
          <Route path="/myspace/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/conferences" element={<h1>VideoConferencias - En Desarrollo</h1>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;