// ------------ FXNALITY ------------
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// ------------ COMPONENTS ------------
import Header from "../../components/Header/Header.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
// ------------ STYLES ------------
import "./HomePage.scss";

function HomePage() {
  return (
    <section className="homepage">
      <Header />
      <Navbar />
    </section>
  )
}

export default HomePage;
