import React from "react";
import "../styles/Navbar.scss";
import Logo from '../assets/img/logo.svg';

class Navbar extends React.Component {
  render() {
    return (
      <nav id="navbar">
        <img id="logo" src={Logo} alt="Logo"/>
        <h1>Mov'interact</h1>
      </nav>
    );
  }
}

export default Navbar;
