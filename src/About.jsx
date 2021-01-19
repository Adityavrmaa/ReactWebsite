import React from 'react';
import Samefile from './Samefile';
import image from '../src/image/2.png';

const About=()=>{
    return(
        <>
            <Samefile name='I am MERN Developer' imagesrc={image} visit="/services"
               buttonName="More info"
           />
        </>
    );
};

export default About;
