import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { jwtDecode } from 'jwt-decode';

const firebaseConfig = {
    apiKey: "AIzaSyDb8L06jQSUByvPyjKSXLGsbx6-1XgoJ2o",
    authDomain: "artscape-121ae.firebaseapp.com",
    projectId: "artscape-121ae",
    storageBucket: "artscape-121ae.appspot.com",
    messagingSenderId: "641908100895",
    appId: "1:641908100895:web:9a4a2c34c7a4c635e8ea2a",
    measurementId: "G-LR33F7MW2J"
};

const isUserLoggedIn = () => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
        console.log('No access token found.');
        return false;
    }

    try {
        const decodedToken = jwtDecode(accessToken);
        const currentTime = Math.floor(Date.now() / 1000) // Current time in seconds

        if (decodedToken.exp < currentTime) {
            console.log('Access token is expired.');
            return false;
        }

        return true;
    } catch (error) {
        console.error('Error decoding the token:', error);
        return false;
    }
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const createAccount = (email, password) => {
    console.log('creating account: ', email, password);

    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            console.log('user: ', userCredentials);
            // save credentials
        })
};

const login = (email, password) => {
    console.log('logging in: ', email, password);

    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            console.log('user: ', userCredentials);
            // save credentialsh
            localStorage.setItem('accessToken', userCredentials.user.accessToken);
            console.log('TESTING', localStorage.getItem('accessToken'))
        });
    }

export { createAccount, login };