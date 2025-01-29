// ------------ FXNALITY ------------
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// ------------ STYLES ------------
import "./Navbar.scss";

function Navbar() {
  return (

    <>
      <div className="navbar">
        <div className="navbar__wrap">
          <ul className="navbar__list">
            <li className="navbar__list-items"><a href="" className="navbar__list-items-links">About</a></li>
            <li className="navbar__list-items"><a href="" className="navbar__list-items-links">Wines</a></li>
            <li className="navbar__list-items"><a href="" className="navbar__list-items-links">Venue</a></li>
            <li className="navbar__list-items"><a href="" className="navbar__list-items-links">Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar;
