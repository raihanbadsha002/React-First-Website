import React from 'react';
import web from '../src/images/webhost.svg';
import Common from './Common';

const Home = () => {
    return ( 
        <>
          <Common 
            pageHeadLine="Grow your business with us"
            imgSrc={web} 
            visit="/service"
            btnName="Get Started" 
          />
        </>
    );
};

export default Home;