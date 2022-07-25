import React from "react";
import { Anuncio } from "../components/Anuncios/Anuncio";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Anuncio />;
      <Navbar />;
    </div>
  );
};

export default Home;
