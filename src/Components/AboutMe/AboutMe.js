import React from 'react';
import { HashLink } from 'react-router-hash-link';
import myImage from '../../images/sajib(4:4+tiny).jpg';

const AboutMe = () => {
    const myImageStyle = { 
        width:"250px",
        border: "2px solid black"
    }
    return (
        <div className="text-center">
            <img style={myImageStyle} className="rounded-circle" src={myImage} alt=""/>
            <h3 className="my-3">Who am I?</h3>
            <p className="text-secondary">
                I am struggling to be a full-stack web developer. I have a serious passion for developing user-friendly websites, creating intuitive, dynamic user experiences, and problem-solving.
                <br/> <HashLink style={{textDecoration: 'none'}} smooth to="#contact">Let's make something special.</HashLink>
            </p>
            
        </div>
    );
};

export default AboutMe;