import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Intro = () => {
    return (
        <div className="dark-bg text-white h-100 d-flex align-items-center justify-content-center">
            <div className="text-center">
                <p className="intro-font text-wrap">Hello, I'm Sajib Barua.<br /> I'm desperately wanted to be a full-stack web developer.</p>
                <HashLink smooth to="#portfolio"><button className="btn btn-outline-light me-2">View my work</button></HashLink>
                <Link to="/Resume-Sajib-v2.pdf" target="_blank" download="Resume-SajibBarua.pdf"><button className="btn btn-outline-light ms-2">Download Resume</button></Link>
            </div>
        </div>
    );
};

export default Intro;