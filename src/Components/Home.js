import React from 'react';
import Carousel from './Carousel';
import About from './About';
import Services from './Services';
import News from './News';

function Home() {
    return (
        <div>
            <Carousel />
            <About />
            <Services />
            <News />
        </div>
    );
}

export default Home;
