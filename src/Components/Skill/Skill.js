import React from 'react';
import SkillDetails from '../SkillDetails/SkillDetails';

const allSkillDetails = [
    {
        name: "React",
        value: 60,
    },
    {
        name: "JavaScript",
        value: 70,
    },
    {
        name: "HTML",
        value: 90,
    },
    {
        name: "CSS",
        value: 90,
    },
    {
        name: "Node.js",
        value: 60,
    },
    {
        name: "Bootstrap",
        value: 90,
    },
    {
        name: "Material-UI",
        value: 50,
    },
    {
        name: "C++",
        value: 70,
    }
]

const Skill = () => {
    return (
        <div>
            {
                allSkillDetails.map(skillDetails => <SkillDetails details={skillDetails}></SkillDetails>)
            }
        </div>
    );
};

export default Skill;