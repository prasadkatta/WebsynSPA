import React from 'react';
import Carousel from './Carousel';
import About from './About';
import Services from './Services';
import News from './News';

function Home() {
    return (
        <>
            <Carousel />
            <About />
            <Services />
            <News />
        </>
    );
}

export default Home;
