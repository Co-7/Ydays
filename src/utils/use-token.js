import {useState} from "react";

export default function useToken() {
    const getToken = () => {
        return localStorage.getItem("accessToken");
    }

    const [token, setToken] = useState(getToken());

    const saveToken = (accessToken) => {
        localStorage.setItem("accessToken", accessToken);
        setToken(accessToken);
    }

    const removeToken = () => {
        localStorage.removeItem("accessToken");
        setToken(null);
        console.info("Logout");
        console.log(token)

    }

    return {
        setToken: saveToken,
        removeToken,
        token
    }
}