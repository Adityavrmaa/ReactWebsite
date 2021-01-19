import React from 'react'
import Samefile from './Samefile';
import image from '../src/image/1.png';

 const Home = () => {
    return (
        <div>
           <Samefile name='I AM ADITYA VERMA' imagesrc={image} visit="/services"
               buttonName="Click Me"
           />
        </div>
    );
};
export default Home;