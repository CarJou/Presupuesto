import React from "react";
import "../css/nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      <Link to={"/"}>
        <button className="return"></button>
      </Link>

      <p className="Dev">
        Desarrollado por Carla Joumier
        
        <span role="img" aria-label="emojis">
          {" "}
          🌈✨{" "}
        </span>
      </p>
      <a className="name"
           href="https://www.linkedin.com/in/carla-joumier/" 
           target="_blank"
           rel="noreferrer">
        <button className="logo"></button>
      </a>
    </div>
  );
};

export default Nav;