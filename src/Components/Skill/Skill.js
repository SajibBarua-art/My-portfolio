import React from 'react';
import SkillDetails from '../SkillDetails/SkillDetails';

const allSkillDetails = [
    {
        id:1,
        name: "React",
        value: 60,
    },
    {
        id:2,
        name: "JavaScript",
        value: 70,
    },
    {
        id:3,
        name: "HTML",
        value: 90,
    },
    {
        id:4,
        name: "CSS",
        value: 90,
    },
    {
        id:5,
        name: "Node.js",
        value: 60,
    },
    {
        id:6,
        name: "Bootstrap",
        value: 90,
    },
    {
        id:7,
        name: "Material-UI",
        value: 50,
    },
    {
        id:8,
        name: "C++",
        value: 70,
    }
]

const Skill = () => {
    return (
        <div>
            {
                allSkillDetails.map(skillDetails => <SkillDetails key={skillDetails.id} details={skillDetails}></SkillDetails>)
            }
        </div>
    );
};

export default Skill;