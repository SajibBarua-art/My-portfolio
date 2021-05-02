import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Intro = () => {
    return (
        <div className="dark-bg text-white h-100 d-flex align-items-center justify-content-center">
            <div className="text-center">
                <p className="intro-font text-wrap">Hello, I'm Sajib Barua.<br /> I'm desperately wanted to be a full-stack web developer.</p>
                <HashLink smooth to="#portfolio"><button className="btn btn-outline-light">View my work</button></HashLink>
            </div>
        </div>
    );
};

export default Intro;