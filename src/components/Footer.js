import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="Footer">
          {/* <div className="footer"> */}
          <p>
            Designed with {/*<i class="fas fa-heart"></i>*/} by{" "}
            <a href="https://github.com/PalomaRmMz" className="Navbar__link">
              Paloma RM
            </a>
            {/* <i class="fas fa-copyright"></i> */}
          </p>
          {/* </div> */}
        </footer>
      </>
    );
  }
}

export default Footer;
