import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import validator from 'validator';
import { createAccount } from "../services/authenticationService";

const Div = styled.div`
    cursor: pointer;
`;

const Form = styled.div`
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

const Signup = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [email, setEmail] = useState('test@example.com');
    const [password, setPassword] = useState('hunter123');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const [showEmailError, setShowEmailError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);

    const handleCreateAccount = (email, password) => {
        const validEmail = validator.isEmail(email);
        const validPassword = validator.isStrongPassword(password, { minSymbols: 0 });

        console.log('vEmail: ', validEmail, ' vPassword', validPassword);
        setShowEmailError(!validEmail);
        setShowPasswordError(!validPassword);

        createAccount(email, password)
            .catch((error) => {
            console.log("Sign in error: ", error)
        });
    }

    return (
        <React.Fragment>
            <Div
                onClick={handleOpen}>
                Sign up
            </Div>
            <Modal
                open={open}
                onClose={handleClose}>
                <Form>
                    <h1>Welcome to Artscape</h1>
                    
                    <div>
                        <label>Email</label>
                        <input type='text' placeholder='Enter Email' value={email}
                            onChange={handleEmailChange}    
                        />
                        {showEmailError && <p>Please enter a valid email.</p>}
                    </div>

                    <div>
                        <label>Password</label>
                        <input type='password' placeholder='Enter Password' value={password} 
                            onChange={handlePasswordChange}
                        />
                        {showPasswordError && <p>Please enter a strong password. (minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1)</p>}
                    </div>

                    <button onClick={() => handleCreateAccount(email, password)}>Create Account</button>
                </Form>
            </Modal>
        </React.Fragment>
    );
};

export default Signup;