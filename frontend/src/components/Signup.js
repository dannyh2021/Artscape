import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import { handleCreateAccount } from "../services/authenticationService";

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
                    </div>

                    <div>
                        <label>Password</label>
                        <input type='password' placeholder='Enter Password' value={password} 
                            onChange={handlePasswordChange}
                        /><br />
                    </div>

                    <button onClick={() => handleCreateAccount(email, password)}>Create Account</button>
                </Form>
            </Modal>
        </React.Fragment>
    );
};

export default Signup;