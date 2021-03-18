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
            <li>
              <a href="#animations-css3" className="Navbar__link">
                {/* <i class="fas fa-suitcase"></i> */}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Portafolio
              </a>
            </li>
            <li>
              <a href="#cursos-platzi" className="Navbar__link">
                {/* <i class="fas fa-id-card"></i> */}
                &nbsp;&nbsp;&nbsp;&nbsp;Experiencia
              </a>
            </li>
            <li>
              <a href="#contact" className="Navbar__link">
                {/* <i class="fas fa-network-wired"></i> */}
                &nbsp;&nbsp;&nbsp;&nbsp;Trabajemos juntos
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
