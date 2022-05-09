import {useState} from "react";
import jwt_decode from "jwt-decode";

export default function useToken() {
    const getToken = () => {
        return localStorage.getItem("accessToken");
    }

    const [token, setToken] = useState(getToken());
    const [role, setRole] = useState(null);
    const knownRoles =["ROLE_USER", "ROLE_CREATOR", "ROLE_ADMIN"];

    const saveToken = (accessToken) => {
        localStorage.setItem("accessToken", accessToken);
        setToken(accessToken);

        const decodedToken = jwt_decode(accessToken);
        // fixme : when there'll be every roles, this would become obsolete
        if (decodedToken.roles.length === 1) {
            if (knownRoles.find(r => r === decodedToken.roles[0])) {
                setRole(decodedToken.roles[0]);
            }
        }
    }

    const removeToken = () => {
        localStorage.removeItem("accessToken");
        setToken(null);
        setRole(null);
    }

    return {
        setToken: saveToken,
        removeToken,
        token,
        role
    }
}