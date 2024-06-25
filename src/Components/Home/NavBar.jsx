import React from "react";
import { Link } from "react-router-dom";
import "./navBar.scss"

const NavBar = () => {
  const items = [
    ["/", "Home"],
    ["Gastronomia", "Gastronomia"],
    ["ComercioLocal", "Comercio"],
    ["Diversion", "Diversion"],
    ["Admin", "Admin"],
  ];

  return (
    <>
      <nav className="contenedorNav">
        <ul className="nav">
          {items.map((item, index) => (
            <li className="li" key={index}>
              <Link className="texto" to={item[0]} onClick={item[0]}>
                {item[1]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
export default NavBar;
