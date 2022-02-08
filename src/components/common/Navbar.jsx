import React from "react";
import Logo from '../../assets/images/logo.svg';
import "../../assets/styles/components/common/Navbar.scss";

function Navbar() {
    return (
        <nav id="navbar">
            <img id="logo" src={Logo} alt="Logo"/>
            <h1>Mov'interact</h1>
        </nav>
    );
}

export default Navbar;
