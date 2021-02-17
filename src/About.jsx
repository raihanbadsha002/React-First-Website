import React from 'react';
import web from '../src/images/about.svg';
import Common from './Common';

const About = () => {
    return ( 
        <>
          <Common 
            pageHeadLine="Welcome to about page"
            imgSrc={web} 
            visit="/contact"
            btnName="Contact Now"
           />
        </>
    );
};

export default About;