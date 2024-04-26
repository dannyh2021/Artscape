import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from 'firebase/app';
import { EmailAuthProvider, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
// const firebaseui = require('firebaseui');

// const firebaseConfig = {
//   apiKey: "AIzaSyDb8L06jQSUByvPyjKSXLGsbx6-1XgoJ2o",
//   authDomain: "artscape-121ae.firebaseapp.com",
//   projectId: "artscape-121ae",
//   storageBucket: "artscape-121ae.appspot.com",
//   messagingSenderId: "641908100895",
//   appId: "1:641908100895:web:9a4a2c34c7a4c635e8ea2a",
//   measurementId: "G-LR33F7MW2J"
// };

// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// const ui = new firebaseui.auth.AuthUI(auth);
// const uiConfig = {
//   callbacks: {
//     signInWithEmailAndPassword: function(authResult, redirectUrl) {
//         console.log('signing in', authResult, ' ', redirectUrl);
//     }
//   },
//   signInFlow: 'popup',
//   signInSuccessUrl: 'https://localhost:3000',
//   signInOptions: [
//     {
//       provider: EmailAuthProvider.PROVIDER_ID,
//       signInMethod: EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD
//     }
//   ]
// };
// ui.start('#firebaseui-auth-container', uiConfig);

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/api',
  cache: new InMemoryCache(),
  // Enable sending cookies over cross-origin requests
  credentials: 'include'
});

// console.log(client);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
