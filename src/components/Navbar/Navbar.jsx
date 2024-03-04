import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeIcon = getImageUrl("nav/closeIcon.png");
  const menuIcon = getImageUrl("nav/menuIcon.png");

  return (
    <nav className={styles.navbar}>
      <div>
        <img className={styles.logo}
          src={getImageUrl("nav/LogoGreen.png")}
          alt="Logo"
        />
        <a className={styles.title} href="/">
          Portfolio
        </a>
      </div>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li className="nav-item">
            <NavLink
              to="/about"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/skills"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Skills
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/experience"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Experience
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/projects"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};