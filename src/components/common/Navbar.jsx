import React from "react";
import Logo from '../../assets/images/logo.svg';
import {Link} from "react-router-dom";
import "../../assets/styles/components/common/Navbar.scss";

function Navbar() {
    return (
        <nav id="navbar">
            <Link className="logo_name" to="/">
                <img id="logo" src={Logo} alt="Logo"/>
                <h1>Mov'interact</h1>
            </Link>
            <Link className="backoffice_nav" to="/backoffice">
                <span className="backoffice_nav">BackOffice</span>
            </Link>
            
        </nav>
    );
}

export default Navbar;
