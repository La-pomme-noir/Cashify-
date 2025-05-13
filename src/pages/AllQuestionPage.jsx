import React from 'react';
import Header from '../components/Header';
import NavbarForum from '../components/NavbarForum';
import AllQuestions from '../components/AllQuestions';
import Footer from '../components/Footer';
import '../styles/style-qanda.css';

export const AllQuestionPage = () => {
  return (
    <div>
      <Header />

      <NavbarForum />

      <main className="contenedor">
        <AllQuestions />
      </main>

      <Footer />
    </div>
  );
};

export default AllQuestionPage;