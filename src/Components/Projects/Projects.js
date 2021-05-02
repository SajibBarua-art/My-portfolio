import React from 'react';
import binaryFixer from '../../images/projects/binary-fixer.png';
import emaJohn from '../../images/projects/Ema John.png';
import chainSmoker from '../../images/projects/chain-smoker.png';
import chattogramViking from '../../images/projects/Chattogram viking.png';
import footballFever from '../../images/projects/Football Fever.png';
import travelGuru from '../../images/projects/Travel Guru.png';
import ProjectDetails from '../ProjectDetails/ProjectDetails';

const allProjectDetails = [
    {
        id: 1,
        name: "Binary Fixer",
        language: "React JS / Node",
        img: binaryFixer,
        liveLink: "https://binary-fixer.web.app/",
        description: "This is a website to give support the people with any kind of PC, Laptop and Smartphone problems.",
        githubLink: "https://github.com/SajibBarua-art/Binary-Fixer"
    },
    {
        id: 2,
        name: "Ema John",
        language: "React JS",
        img: emaJohn,
        liveLink: "https://ema-john-simple-copy.web.app/",
        description: "It is an E-commerce website. A user can buy any items from it.",
        githubLink: "https://github.com/SajibBarua-art/ema-john-simple"
    },
    {
        id: 3,
        name: "Chain Smoker",
        language: "React JS / Node",
        img: chainSmoker,
        liveLink: "https://chain-smoker.web.app/",
        description: "It is a full-stack website. This is a website for selling cigarette",
        githubLink: "https://github.com/SajibBarua-art/Chain-Smoker"
    },
    {
        id: 4,
        name: "Chattogram-Viking",
        language: "React JS",
        img: chattogramViking,
        liveLink: "https://compassionate-mclean-5292dc.netlify.app/",
        description: "It is an auction related website. One can choose his favorite player and add him in the team.",
        githubLink: "https://github.com/SajibBarua-art/Chattogram-Viking"
    },
    {
        id: 5,
        name: "Football Fever",
        language: "React JS",
        img: footballFever,
        liveLink: "https://inspiring-borg-f17ba6.netlify.app/",
        description: "The website related to show the details about Spanish Football Club.",
        githubLink: "https://github.com/SajibBarua-art/Football-Fever"
    },
    {
        id: 6,
        name: "Travel Guru",
        language: "React JS / Node",
        img: travelGuru,
        liveLink: "https://zen-shockley-507837.netlify.app/",
        description: "It is a website for selling tickets of bus, train and other transportation services.",
        githubLink: "https://github.com/SajibBarua-art/Travel-Guru"
    }
]

const Projects = () => {
    return (
        <div id="portfolio" className="my-5 py-5" style={{backgroundColor: 'rgb(245, 245, 245)'}}>
            <h1 className="text-brand text-center mb-5">PROJECTS</h1>
            <div className="d-flex justify-content-center">
                <div className="container row">
                    {
                        allProjectDetails.map(project => <ProjectDetails key={project.id} project={project}></ProjectDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;