import React from 'react';
import Skill from '../Skill/Skill';
import AboutMe from '../AboutMe/AboutMe';
import Specialties from '../Specialties/Specialties';

const About = () => {
    return (
        <div className="mt-5 d-flex justify-content-center" id="about">
            <div>
                <h1 className="text-brand text-center mb-5">ABOUT</h1>
                <Specialties></Specialties>
                <div className="row container mt-4">
                    <div className="col-md-5 col-sm-12">
                        <AboutMe></AboutMe>
                    </div>
                    <div className="col-md-7 col-sm-12">
                        <Skill></Skill>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;