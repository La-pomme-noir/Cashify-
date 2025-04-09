import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";
import Header from '../components/Header';
import NavbarConferencias from '../components/NavbarConfe';
import Footer from '../components/Footer';
import DashboardConferences from './DashboardConferences';
import ConferencesPublic from '../components/Conferences'; 

const Conferences = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  if (isLoggedIn) {
    return <DashboardConferences />;
  }

  return (
    <>
      <Header />
      <NavbarConferencias />
      <ConferencesPublic />
      <Footer />
    </>
  );
};

export default Conferences;
