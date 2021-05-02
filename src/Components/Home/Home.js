import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div className='h-100' id="home">
            <Navbar></Navbar>
            <Intro></Intro>
            <About id="about"></About>
            <Projects></Projects>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default Home;