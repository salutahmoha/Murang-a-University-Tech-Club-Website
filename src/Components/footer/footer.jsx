import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import "./footer.css";

function MutcFooter() {
  return (
    <div id="footer">
      <div className="footer-container">
        <div className="socials">
          <div className="social">
            <FaFacebook />
          </div>
          <div className="social">
            <FaInstagram />
          </div>
          <div className="social">
            <FaTwitter />
          </div>
          <div className="social">
            <FaGooglePlus />
          </div>
          <div className="social">
            <FaYoutube />
          </div>
        </div>

        <div className="footer-navlist">
          <ul className="footer-lists">
            <li className="footer-list" activeClassName="active">
              <a href="/">Home</a>
            </li>
            <li className="footer-list">
              <a href="/leadership">Leadership</a>
            </li>
            <li className="footer-list">
              <a href="/tracks">Tracks</a>
            </li>
            <li className="footer-list">
              <a href="/events">Events</a>
            </li>
          </ul>
        </div>

        <div className="copyright">
          <p>Copyright &copy; 2024: Designed by <span>Salad</span></p>
        </div>
      </div>
    </div>
  );
}

export default MutcFooter;
