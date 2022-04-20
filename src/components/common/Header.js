import React from 'react';
import logo from '../../assets/images/logo.png'
import '../../assets/styles/components/common/Header.scss'
import '../../assets/styles/components/common/tools.scss'
// import { ReactComponent as AccountSvg } from '../../assets/icons/account.svg'
// import { ReactComponent as ArrowDownSvg } from '../../assets/icons/arrowDown.svg'
import {Link} from "react-router-dom";
import useToken from "../../utils/use-token";

function Header({logged}) {

    const {removeToken} = useToken();

    const PublicLinks = () => (
        <div id={"navbar-links"} className="row">
            <Link to={"/login"}>
                <p>Login</p>
            </Link>
            <Link to={"/register"}>
                <p>Register</p>
            </Link>
        </div>
    )

    const PrivateLinks = () => (
        <div id={"navbar-links"} className="row">
            <Link to={"/backoffice"}>
                <p>Backoffice</p>
            </Link>
            <a href="/" onClick={removeToken}>Logout</a>
        </div>
    )

    return (
        <div className="containerHeader row">
            <div className="redirect row">
                <Link to="/" className="column center">
                    <div className="row">
                        <img alt="logo Mov'Interact" className="logoHeader" src={logo}/>
                        <span className="movinteract column center">mov'interact</span>
                    </div>
                </Link>
            </div>



            <div className="column center infos">
                <div className="row account">
                    {logged ?
                        <PrivateLinks />
                        :
                        <PublicLinks />
                    }
                </div>
            </div>
        </div>
    );
}

export default Header;
