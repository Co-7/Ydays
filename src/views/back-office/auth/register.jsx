import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Pane, Heading, TextInput, Button, Text} from "evergreen-ui";
import http from "../../../utils/http-common";

function Register() {
    const [username, setUsername] = useState('');
    const [mail, setMail] = useState('');
    // const [avatar, setAvatar] = useState('');
    const [password, setPassword] = useState('');
    const [confirmationPassword, setConfirmationPassword] = useState('');

    let navigate = useNavigate();

    const handleRegistration = () => {
        if (password !== confirmationPassword) {
            return;
        }

        http.post('/users', {
            "email": mail,
            "password": password,
            "username": username,
            "avatar": "",
            "role": "IS_AUTHENTICATED_ANONYMOUSLY"
        }).then(function (response) {
            if (response.status === 201) {
                console.log('Registered');
                navigate('/login');
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    // todo : avatar upload
    return (
        <Pane display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
            <Heading marginBottom={30} size={900} color={"white"} marginTop={52}>Register</Heading>
            <Pane display='flex' flexDirection='column' alignItems={"center"} justifyContent={"center"}>
                <TextInput marginBottom={10} onChange={e => setUsername(e.target.value)} value={username} placeholder="Username"/>
                <TextInput marginBottom={10} onChange={e => setMail(e.target.value)} value={mail} placeholder="Mail address"/>
                <TextInput marginBottom={10} type="password" onChange={e => setPassword(e.target.value)} value={password}
                           placeholder="Password"/>
                <TextInput type="password" onChange={e => setConfirmationPassword(e.target.value)}
                           value={confirmationPassword} placeholder="Confirm password"/>
                <Button appearance={"primary"} margin={10} padding={10} width={110} size={"medium"} onClick={handleRegistration}>S'inscrire</Button>
            </Pane>
            <Link to='/login'>
                <Text textDecoration={"none"} color={"white"}>Se connecter</Text>
            </Link>
        </Pane>
    );
}

export default Register;