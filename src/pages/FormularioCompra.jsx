import React from "react";
import { useLocation } from "react-router-dom";
import Header from '../components/Header';
import Navbar from '../components/NavbarConfe';
import Footer from '../components/Footer';
import FormularioCompraForm from "../components/FormularioCompra";

const FormularioCompra = () => {
  const location = useLocation();
  const plan = location.state?.planSeleccionado || "Ningún plan seleccionado";

  return <FormularioCompraForm plan={plan} />;
};

export default FormularioCompra;
