import React, { useState, useEffect } from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import classnames from "classnames";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const Header = () => {
  let match = useRouteMatch("/gallery/:gallerySlug");

  const [topReached, setTopReached] = useState(true);
  const [applicable, setApplicable] = useState(match !== null);
  const [hidden, setHidden] = useState(applicable);

  useScrollPosition(
    ({ currPos }) => {
      setTopReached(currPos.y > -200);
    },
    [topReached]
  );

  useEffect(() => {
    setApplicable(match !== null);
  }, [match]);

  useEffect(() => {
    setHidden(topReached && applicable);
  }, [applicable, topReached]);

  const classes = classnames("header", {
    "header--hidden": hidden
  });

  return (
    <div className={classes}>
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
};

export default Header;
