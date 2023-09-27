import React from 'react';
import { useLocation } from "react-router-dom";
import '../Styles/About.scss';
import Team from './Team';
import aboutImg from '../Images/about-img.jpg'
function About() {
    const aboutDetails = [
        {
            "id": 1,
            "title": "Welcome to loazzne",
            "title2": "Heating and air conditioning repair and installation company",
            "Desc": "There are many variations of passages of lorem ipsum available, but the majorify have suffered alteration in some form by injected humour, or randmised words which don't look even slightly believable.",
            "btn": "LEARN MORE"
        }
    ]
    const location = useLocation();
    const shouldHideDiv = location.pathname !== "/about";
    return (
        <>
            <div className='about_area'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='about_image'>
                                <img src={aboutImg} alt="aboutImg" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            {aboutDetails.map(item => (
                                <div className='about_details' key={item.id}>
                                    <h4>{item.title}</h4>
                                    <h1>{item.title2}</h1>
                                    <p>{item.Desc}</p>
                                    <a href="#" className="btn-yellow">{item.btn}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {shouldHideDiv ? null : (
                <Team />
            )}
        </>

    );
}

export default About;