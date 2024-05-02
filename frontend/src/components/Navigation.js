import { Link } from 'react-router-dom';
import Button from './Button'; 
import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Login from './Login';
import Signup from './Signup';

const firebaseConfig = {
    apiKey: "AIzaSyDb8L06jQSUByvPyjKSXLGsbx6-1XgoJ2o",
    authDomain: "artscape-121ae.firebaseapp.com",
    projectId: "artscape-121ae",
    storageBucket: "artscape-121ae.appspot.com",
    messagingSenderId: "641908100895",
    appId: "1:641908100895:web:9a4a2c34c7a4c635e8ea2a",
    measurementId: "G-LR33F7MW2J"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// const handleCreateAccount = (email, password) => {
//     // const email = 'test@example.com';
//     // const password = 'hunter2';
//     console.log('creating account: ', email, password);

//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredentials) => {
//             console.log('user: ', userCredentials);
//         })
//         .catch((error) => {
//             console.log('error: ', error);
//         });
// };

const LargeContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 56px;
`;

const Container = styled.div`
    background-color: pink;
    height: 48px;
    min-width: 60px;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 16px;
`;

const SearchContainer = styled.div`
    height: 48px;
    min-width: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1 1 auto
`;

const linkStyle = {
    textDecoration: 'none',
    color: 'black'
}

const SignUpForm = styled.div`
    min-width: 400px;
    padding: 20px 10px 24px;
    position: fixed;
    background-color: pink;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    h1 {
        width: 400px;
    }

    div {
        width: 268px;
        margin: auto;
        text-align: left;
    }

    input {
        width: 268px;
    }
`;

const Navigation = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [email, setEmail] = useState('test@example.com');
    const [password, setPassword] = useState('hunter123');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    return (
        <LargeContainer>
            <Container>
                <Link style={linkStyle} to='/'>Home</Link>
            </Container>
            <Container>
                <Link style={linkStyle} to='/explore'>Explore</Link>
            </Container>
            <Container>
                <Link style={linkStyle} to='/create'>Create</Link>
            </Container>
            <SearchContainer>
                <input placeholder='search'></input>
            </SearchContainer>
            <Container>
                <Login />
            </Container>
            <Container>
                <Signup />
            </Container>
        </LargeContainer>
    );
};

export default Navigation;