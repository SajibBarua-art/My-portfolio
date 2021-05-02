import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <div className="dark-bg text-white h-100 d-flex align-items-center justify-content-center">
            <div className="text-center">
                <p className="intro-font">Hello, I'm Sajib Barua.<br /> I'm desperately wanted to be a full-stack web developer.</p>
                <Link to="/"><button className="btn btn-primary">View my work</button></Link>
            </div>
        </div>
    );
};

export default Intro;