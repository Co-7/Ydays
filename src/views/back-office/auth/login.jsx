import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import http from "../../../utils/http-common";
import {Button, Heading, Pane, Text, TextInput} from "evergreen-ui";

function Login({setToken}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const handleLogin = () => {
        http.post('/login', {
            "username": username,
            "password": password
        }).then(function (response) {
            if (response.data.token !== null) {
                setToken(response.data.token);
                console.log('Logged')
                navigate("/");
            } else {
                console.error('No token found');
            }
        }).catch(function (error) {
            console.error(error.message);
        });
    }

    return (
        <Pane display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
            <Heading marginBottom={30} size={900} color={"white"} marginTop={52}>Login</Heading>
            <Pane display='flex' flexDirection='column' alignItems={"center"} justifyContent={"center"}>
                <TextInput marginBottom={10} onChange={e => setUsername(e.target.value)} value={username} placeholder="Username"/>
                <TextInput type="password" onChange={e => setPassword(e.target.value)} value={password}
                           placeholder="Password"/>
                <Button appearance={"primary"} margin={10} padding={10} width={110} size={"medium"} onClick={handleLogin}>Se connecter</Button>
            </Pane>
            <Link to='/register'>
                <Text textDecoration={"none"} color={"white"}>S'inscrire</Text>
            </Link>
        </Pane>
    );
}

export default Login;