import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

import { MdHome, MdPerson, MdSearch } from "react-icons/md";
import { FiSend, FiCompass } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

import Logo from "../../assets/images/logo.png";

export const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar">
        <a href="#!" className="nav-item logo">
          <img src={Logo} alt="Instagram logo" />
        </a>

        <div className="nav-item search-bar">
          <MdSearch />
          Search
        </div>

        <ul className="menu">
          <li className="menu-item">
            <Link to="/">
              <MdHome />
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/messages">
              <FiSend />
            </Link>
          </li>
          <li className="menu-item">
            <FiCompass />
          </li>
          <li className="menu-item">
            <FaRegHeart />
          </li>
          <li className="menu-item">
            <MdPerson />
          </li>
        </ul>
      </div>
    </nav>
  );
};
