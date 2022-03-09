import React from "react";
import Logo from '../../assets/images/logo.svg';
import {Link} from "react-router-dom";
import "../../assets/styles/components/common/Navbar.scss";

function Navbar() {
    return (
        <nav id="navbar">
            <Link to="/">
                <img id="logo" src={Logo} alt="Logo"/>
                <h1>Mov'interact</h1>
            </Link>
        </nav>
    );
}

export default Navbar;
