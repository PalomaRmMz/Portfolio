import React from "react";
import logo from "../img/logo.png";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="Navbar">
          <a href="/">
            <img src={logo} alt="LogoPamRmMz" className="Navbar__logo" />
          </a>
          <ul className="Navbar__items">
            <li className="">
              <span className="Navbar__hamburger">
                <img src={logo} alt="LogoPamRmMz" />
              </span>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
