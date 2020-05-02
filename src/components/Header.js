import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <header id="header">
          <div className="logo">
            <img src="#" alt="logo"></img>
          </div>
          <div className="navbox">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}
export default Header;
