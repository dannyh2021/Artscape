import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Routes } from 'react-router-dom';
import Home from './home';
import Navigation from '../components/Navigation';

const Pages = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/explore' element={<Home />} />
            </Routes>
            {/* <Route exact path="/explore" component={<p>Explore</p>} /> */}
        </Router>
    )
}

export default Pages;