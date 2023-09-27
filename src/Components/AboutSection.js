import React from 'react'
import '../Styles/AboutSection.scss'
function AboutSection() {
    const aboutDetails = [
        {
            'id': 1,
            'about_image_box': require('../Images/about-1.jpg'),
            'about_details': 'We are trusted by more than 8900 clients'
        },
        {
            'id': 2,
            'about_image_box': require('../Images/about-3.jpg'),
            'about_details': 'Tincidunt elit magnis nulla facilisis sagittis is maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.'
        },
        {
            'id': 3,
            'about_image_box': require('../Images/about-1.jpg'),
            'about_details': 'Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many varia-tions of passages of available but the majarity have suffered.'
        }
    ]
    return (
        <div className='about_style_3_area'>
            <div className='container'>
                <div className='row'>
                    {aboutDetails.map(item => (
                        <div className='col-md-4 col-sm-6' key={item.id} id={`about-${item.id}`}>
                            <div className='about_image_box'>
                                <img src={item.about_image_box }/>
                                <div className='about_details'>                                                                        
                                    <p>{item.about_details}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutSection
