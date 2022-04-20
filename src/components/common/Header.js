import React from 'react';
import logo from '../../assets/images/logo.png'
import '../../assets/styles/components/common/Header.scss'
import '../../assets/styles/components/common/tools.scss'
// import { ReactComponent as AccountSvg } from '../../assets/icons/account.svg'
// import { ReactComponent as ArrowDownSvg } from '../../assets/icons/arrowDown.svg'
import {Link} from "react-router-dom";
import useToken from "../../utils/use-token";
import { Popover, Position, Menu, Button } from 'evergreen-ui'

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
            <Popover
                position={Position.BOTTOM_LEFT}
                content={
                    <Menu>
                        <Menu.Group>
                            <Menu.Item>
                                <Link to={"/backoffice"}>
                                <p id="backButton">Backoffice</p>
                                </Link>
                            </Menu.Item>
                        </Menu.Group>
                        <Menu.Divider />
                        <Menu.Group>
                            <Menu.Item onSelect={() => removeToken()} intent="danger">
                                Se déconnecter
                            </Menu.Item>
                        </Menu.Group>
                    </Menu>
                }
            >
                <Button marginRight={16}>{localStorage.getItem("username")}</Button>
            </Popover>
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
