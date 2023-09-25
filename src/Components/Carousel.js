import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/Carousel.scss'
function Carousel() {
    const sliderimages = [
        require('../Images/slider-1.jpg'),
        require('../Images/slider-2.jpg'),
        require('../Images/slider-3.jpg'),
        require('../Images/slider-4.jpg'),
        require('../Images/slider-5.jpg')
    ]
    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Loop the slider
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 1, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: false, // Autoplay the slider
        autoplaySpeed: 2000, // Autoplay interval in milliseconds
        arrows:false,
        adaptiveHeight: true
    };

    return (
        <div className='home-slider'>
            <Slider {...settings}>
                {sliderimages.map((image, index) => (
                    <div key={index} className='slide-item'>
                        <img src={image} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel
