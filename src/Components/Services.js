import React from 'react';
import '../Styles/Services.scss'
// import serviceImg from '../Images/service-1.jpg'
function Services() {

    const servicelist = [
        {
            'id':1,
            'service_img': require('../Images/service-1.jpg'),
            'service_box_tite': 'Cooling Services',
            'servie_box_desc': 'There are many variations passages of lorem ipsum available but the majority have suffered alteration.',
            'service_box_action': 'LEARN MORE'

        },
        {
            'id':2,
            'service_img': require('../Images/service-2.jpg'),
            'service_box_tite': 'Heating Services',
            'servie_box_desc': 'There are many variations passages of lorem ipsum available but the majority have suffered alteration.',
            'service_box_action': 'LEARN MORE'

        },
        {
            'id':3,
            'service_img': require('../Images/service-3.jpg'),
            'service_box_tite': 'Other Services',
            'servie_box_desc': 'There are many variations passages of lorem ipsum available but the majority have suffered alteration.',
            'service_box_action': 'LEARN MORE'

        }
    ]
    return (
        <div className='service_area'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='section-title'>
                            <h1>Our services</h1>
                        </div>
                    </div>
                    {servicelist.map(item =>(
                        <div className='col-md-4 col-sm-6' key={item.id}>
                            <div className='service_box'>
                                <div className='service_img'>
                                    <img src={item.service_img} alt="service 1" />
                                </div>
                                <div className='service_details'>
                                    <h2>{item.service_box_tite}</h2>
                                    <p>
                                        {item.servie_box_desc}                                      
                                    </p>
                                    <a href="#" className="btn-yellow">
                                        {item.service_box_action}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Services;