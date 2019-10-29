import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <div className="header__menu">
      <ul>
        <li className="header__menu__item">
          <Link to="/">
            <div className="header__logo">
              <img src="/seal-5.png" alt="Maxime Wojtczak" />
            </div>
          </Link>
        </li>
        <li className="header__menu__item">
          <Link to="/">Galleries</Link>
        </li>
        <li className="header__menu__item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
