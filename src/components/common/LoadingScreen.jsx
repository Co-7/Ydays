import React from "react";
import "../../assets/styles/components/common/LoadingScreen.scss";
import logo from "../../assets/images/logo.png";

function LoadingScreen() {
    return (
        <div className={"loading-screen"}>
            <img alt={"logo"} src={logo} height={100} width={100}  />
            <div className={"circle"}></div>
        </div>
    )
}

export default LoadingScreen;