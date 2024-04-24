import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Navigation from '../components/Navigation';

const Pages = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/explore' element={<Home />} />
                <Route exact path='/create' element={<Home />} />
                <Route exact path='/login' element={<Login />} />
            </Routes>
        </Router>
    )
}

export default Pages;