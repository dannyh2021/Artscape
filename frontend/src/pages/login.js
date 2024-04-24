import React, { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { EmailAuthProvider, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';

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


const Login = () => {
    // ui.start('#firebaseui-auth-container', uiConfig);
    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
        ui.start('#firebaseui-auth-container', uiConfig);
    });

    return(
        <React.Fragment>
            <div id='firebaseui-auth-container'></div>
        </React.Fragment>
    );
};


export default Login;