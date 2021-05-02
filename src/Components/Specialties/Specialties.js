import React from 'react';
import DevicesIcon from '@material-ui/icons/Devices';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SpeedIcon from '@material-ui/icons/Speed';
import GifIcon from '@material-ui/icons/Gif';
import Specialty from '../Specialty/Specialty';


const specialties = [
    {
        category: "Fast",
        text: "Fast load times and lag free interaction, my highest priority.",
        icon: SpeedIcon
    },
    {
        category: "Responsive",
        text: "My layouts will work on any device, big or small.",
        icon: DevicesIcon
    },
    {
        category: "Intuitive",
        text: "Strong preference for easy to use, intuitive UX/UI.",
        icon: EmojiObjectsIcon
    },
    {
        category: "Dynamic",
        text: "Websites don't have to be static, I love making pages come to life.",
        icon: GifIcon
    }
]

const Specialties = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="container row">
                {
                    specialties.map(specialty => <Specialty specialty={specialty}></Specialty>)
                }
            </div>
        </div>
    );
};

export default Specialties;