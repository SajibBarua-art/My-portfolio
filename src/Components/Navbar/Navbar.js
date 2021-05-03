import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fw-bold navbar">
            <div className="ms-5 container-fluid">
                <h1>.</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <HashLink className="hash-link-style" smooth to="#home">HOME</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="hash-link-style" smooth to="#about">ABOUT</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="hash-link-style" smooth to="#portfolio">PORTFOLIO</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="hash-link-style" smooth to="#blog">BLOG</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="hash-link-style" smooth to="#contact">CONTACT</HashLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;