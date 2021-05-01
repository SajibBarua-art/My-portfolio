import React from 'react';
import About from '../About/About';
import Intro from '../Intro/Intro';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div className='h-100'>
            <Intro></Intro>
            <Navbar></Navbar>
            <About></About>
        </div>
    );
};

export default Home;