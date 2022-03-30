import React from 'react';
import logo from '../../assets/images/logo.png'
import '../../assets/styles/components/common/Header.scss'
import '../../assets/styles/components/common/tools.scss'
import { ReactComponent as AccountSvg } from '../../assets/icons/account.svg'
import { ReactComponent as ArrowDownSvg } from '../../assets/icons/arrowDown.svg'
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="containerHeader row">
            <div className="redirect row">
                <Link to="/" className="column center">
                    <div className="row">
                        <img className="logoHeader" src={logo}/>
                        <span className="movinteract column center">mov'interact</span>
                    </div>

                </Link>
                <nav className="movfav">
                    <ul>
                        <li>
                            <Link to="/movies" classname="moviesIndex">
                                Films
                            </Link>
                        </li>
                        <li>
                            <Link to="/favourites">
                                Favories
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="column center infos">
                <div className="row account">
                    <AccountSvg/>
                    <span className="column center">Thierry</span>
                    <ArrowDownSvg/>
                </div>
            </div>
        </div>
    );
}

export default Header;