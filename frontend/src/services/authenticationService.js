import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

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

const handleCreateAccount = (email, password) => {
    console.log('creating account: ', email, password);

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            console.log('user: ', userCredentials);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
};

const handleLogin = (email, password) => {
    console.log('logging in: ', email, password);

    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            console.log('user: ', userCredentials);
        })
        .catch((error) => {
            console.error('e:', error);
            throw error;
        })
    }

export { handleCreateAccount, handleLogin };