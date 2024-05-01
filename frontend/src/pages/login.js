import React, { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { EmailAuthProvider, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
// import Modal from '../components/Modal';
import styled from 'styled-components';
import { Button, Modal } from '@mui/material';

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
const auth = getAuth(app);;
const uiConfig = {
    callbacks: {
        signInWithEmailAndPassword: function(authResult, redirectUrl) {
            console.log('signing in', authResult, ' ', redirectUrl);
        }
    },
    signInFlow: 'popup',
    signInSuccessUrl: 'https://localhost:3000',
    signInOptions: [
        {
        provider: EmailAuthProvider.PROVIDER_ID,
        signInMethod: EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD
        }
    ]
};

const LoginButton = styled.button`
    
`;

const LoginForm = styled.div`
    min-height: 400px;
    padding: 20px 10px 24px;
    background-color: pink;
    position: fixed;
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

const Login = () => {
    // ui.start('#firebaseui-auth-container', uiConfig);
    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
        // ui.start('#firebaseui-auth-container', uiConfig);
    });

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <React.Fragment>
            <LoginButton onClick={handleOpen}>Open modal</LoginButton>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <LoginForm>
                    <h1>Welcome to Artscape</h1>

                    <div>
                        <label>Email</label>
                        <input type='text' placeholder='Enter Email' />
                    </div>

                    <div>
                        <label>Password</label>
                        <input type='password' placeholder='Enter Password' /><br />
                    </div>
        
                    <button>Login</button>
                </LoginForm>
            </Modal>
        </React.Fragment>
    );
};


export default Login;