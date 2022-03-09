import React from "react";
import "../assets/styles/Navbar.scss";
import Logo from '../assets/images/logo.svg';
import {Link} from "react-router-dom";

function Navbar({logged}) {

    const PublicLinks = () => (
        <div id={"navbar-links"}>
            <Link to={"/login"}>
                <p>Login</p>
            </Link>
            <Link to={"/register"}>
                <p>Register</p>
            </Link>
        </div>
    )

    const PrivateLinks = () => (
        <div id={"navbar-links"}>
            <Link to={"/"}>
                <p>Backoffice</p>
            </Link>
        </div>
    )
    
    return (
        <nav id="navbar">
            <div id={"navbar-spacer"}>

            </div>
            <div id={"navbar-logo"}>
                <img id="logo" src={Logo} alt="Logo"/>
                <h1>Mov'interact</h1>
            </div>
            {logged ?
                <PrivateLinks />
                :
                <PublicLinks />
            }
        </nav>
    );
}

export default Navbar;
