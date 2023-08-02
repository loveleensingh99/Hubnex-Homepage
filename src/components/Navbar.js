import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          <img
            src={require("../images/logo.png")}
            className="nav-logo"
            alt=""
          ></img>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item ">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </NavLink>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" href="#">
                  Website &amp; App Development
                </NavLink>
                <NavLink className="dropdown-item" href="#">
                  Search Engine Optimization
                </NavLink>
                <NavLink className="dropdown-item" href="#">
                  Social Media Optimisation
                </NavLink>
                <NavLink className="dropdown-item" href="#">
                  Business Consulting
                </NavLink>
                <NavLink className="dropdown-item" href="#">
                  Political Campaign Management
                </NavLink>
                <NavLink className="dropdown-item" href="#">
                  Emerging Technology Services
                </NavLink>
                <NavLink className="dropdown-item" href="#">
                  Video Production
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-success  my-2 my-sm-0"
                type="submit"
              >
                Connect
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
