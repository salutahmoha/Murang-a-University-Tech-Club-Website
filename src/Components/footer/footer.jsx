import React from "react";
import { Link } from "react-router-dom";

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
              <Link exact to="/" activeClassName="active-footer-link">
                Home
              </Link>
            </li>
            <li className="footer-list">
              <Link exact to="leadership" activeClassName="active-footer-link">
                Leadership
              </Link>
            </li>
            <li className="footer-list">
              <Link to="tracks" activeClassName="active-footer-link">
                Tracks
              </Link>
            </li>
            <li className="footer-list">
              <Link to="events" activeClassName="active-footer-link">
                Events
              </Link>
            </li>
          </ul>
        </div>

        <div className="copyright">
          <p>
            Copyright &copy; 2024: Designed by <span>Salad</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MutcFooter;
