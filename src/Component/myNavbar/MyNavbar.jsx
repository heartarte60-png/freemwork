import React, { useState, useEffect } from "react";
import styles from "./MyNavbar.module.css";

import { NavLink, Link } from "react-router-dom";

export default function MyNavbar() {
  const [navClass, setNavClass] = useState("p-2");

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 40) {
        setNavClass("p-1 ");
      } else {
        setNavClass("p-4 ");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        id="navbar"
        className={`navbar navbar-expand-lg fixed-top ${navClass} ${styles.navbar}`}
      >
        <div className="container-fluid">
          <navLink className={`${styles.brand}`} to={"/"}>
            Start Framework
          </navLink>

          <button
            className={`navbar-toggler ${styles.toggler}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span
              className={`navbar-toggler-icon ${styles.togglerIcon}`}
            ></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-5">
              <li className="nav-item me-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.active : "nav-link"
                  }
                  to="/about"
                >
                  ABOUT
                </NavLink>
              </li>

              <li className="nav-item me-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.active : "nav-link"
                  }
                  to="/portoflo"
                >
                  PORTFOLIO
                </NavLink>
              </li>

              <li className="nav-item me-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.active : "nav-link"
                  }
                  to="/contact"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
