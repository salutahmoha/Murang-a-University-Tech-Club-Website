import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../Assets/logo.png";
function navbar() {
  return (
    <section id="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-items">
          <ul className="nav-lists">
            <li className="nav-list">
              <Link to="/" activeClassName="active">
                Home
              </Link>
            </li>
            <li className="nav-list">
              <Link to="/leadership">Leadership</Link>
            </li>
            <li className="nav-list">
              <Link to="/tracks">Tracks</Link>
            </li>
            <li className="nav-list">
              <Link to="/events">Events</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default navbar;
