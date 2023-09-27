import React from 'react'
import '../Styles/ServicesSection.scss'
function ServicesSection() {
    const serviceinfo = [
        {
            'id': 1,
            'service_img': require('../Images/service-info.jpg'),
            'service_info': 'Loazzne® is a heating and cooling service company with a history of excellence, customer service, and quality craftsmanship. We specialize in HVAC service, replacement, and repair for both residential and commercial customers in North America.'
        }
    ]
    return (
        <div className='service_style_2_area'>
            <div className='container'>
                <div className='row'>
                    {serviceinfo.map(item => (
                        <div className='col-md-12' key={item.id}>
                            <div className='service_img_info_box'>
                                <img src={item.service_img} />
                                <p>{item.service_info}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServicesSection
