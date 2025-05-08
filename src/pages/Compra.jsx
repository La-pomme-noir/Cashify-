import React from "react";
import { useParams } from "react-router-dom";
//import Header from '../components/Header';
//import Navbar from '../components/NavbarConfe';
//import Footer from '../components/Footer';
import CompraCard from "../components/CompraCard";

const Compra = () => {
  const { plan } = useParams();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Proceso de Compra</h1>
      <CompraCard plan={plan} />
    </div>
    
  );
  



};


export default Compra;
