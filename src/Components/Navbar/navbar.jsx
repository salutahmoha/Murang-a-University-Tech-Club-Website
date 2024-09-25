import React from "react";
import "./navbar.css";
function navbar() {
  return (
    <section id="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h4>MUTC</h4>
        </div>
        <div className="nav-items">
          <ul className="nav-lists">
            <li className="nav-list" activeClassName="active">
              <a href="#">Home</a>
            </li>
            <li className="nav-list">
              <a href="#">Leadership</a>
            </li>
            <li className="nav-list">
              <a href="#">Tracks</a>
            </li>
            <li className="nav-list">
              <a href="#">Events</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default navbar;
