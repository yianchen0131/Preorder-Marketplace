import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scroll: false,
    };
  }

  /**
   * When scrolled, this.state.scroll becomes true and
   * className selects the css selector (scrolled) that changes navbar color
   * @param {*} event
   */
  handleScroll = (event) => {
    event.preventDefault();
    let element = event.target;
    if (element.scrollTop > element.scrollHeight) {
      this.setState({ scroll: true });
    }
  };

  render() {
    let className = this.state.scroll === true ? "scrolled" : "";
    return (
      <div>
        <nav
          id="mainNavbar"
          className={`${className} navbar navbar-dark navbar-expand-md py-0 fixed-top`}
          onScroll={this.handleScroll}
        >
          <div className="navbar-brand">PREORDER</div>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navLinks"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navLinks">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Newin" className="nav-link">
                  NEW IN
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/All" className="nav-link">
                  ALL
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/RegisterUser" className="nav-link">
                  JOIN
                </Link>
              </li>
              <li className="nav-item">
                <div className="nav-link"></div>
              </li>
            </ul>
          </div>
        </nav>
        <div></div>
      </div>
    );
  }
}

export default Navbar;
