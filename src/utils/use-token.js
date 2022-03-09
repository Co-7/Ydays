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

    return {
        setToken: saveToken,
        token
    }
}