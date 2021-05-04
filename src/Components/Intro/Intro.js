import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Particles from 'react-particles-js';
import './Intro.css';

const Intro = () => {
    return (
        <div className="dark-bg">
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 2
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
                width="100%"
                height="100vh"

            />
            <div id="text-div">
                <div className="center-all text-center text-info">
                    <p className="intro-font text-wrap">Hello, I'm Sajib Barua.<br /> I'm desperately wanted to be a full-stack web developer.</p>
                    <HashLink smooth to="#portfolio"><button className="btn btn-outline-light me-2">View my work</button></HashLink>
                    <Link to="/Resume-Sajib-v3.pdf" target="_blank" download="Resume-SajibBarua.pdf"><button className="btn btn-outline-light ms-2">Download Resume</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Intro;