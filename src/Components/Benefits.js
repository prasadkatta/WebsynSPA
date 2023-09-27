import React from 'react'
import '../Styles/Benefits.scss'
function Benefits() {

    const benefitsList = [
        {
            'id': 1,
            'benefits_icon': require('../Images/24X7.jpg'),
            'benefits_title': 'Emergency Service',
            'benefits_desc': 'There are many passages of lorem ipsum available but the majority have alteration.'
        },
        {
            'id': 2,
            'benefits_icon': require('../Images/payment.jpg'),
            'benefits_title': 'No Upfront Payment',
            'benefits_desc': 'There are many passages of lorem ipsum available but the majority have alteration.'
        },
        {
            'id': 3,
            'benefits_icon': require('../Images/gurantee.jpg'),
            'benefits_title': 'Satisfaction Guarantee',
            'benefits_desc': 'There are many passages of lorem ipsum available but the majority have alteration.'
        },
        {
            'id': 4,
            'benefits_icon': require('../Images/exp.jpg'),
            'benefits_title': '8 Years Experience',
            'benefits_desc': 'There are many passages of lorem ipsum available but the majority have alteration.'
        }
    ]
    return (
        <div className='service_benefits_area'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='section-title'>
                            <h1>Our benefits</h1>
                        </div>
                    </div>
                    {benefitsList.map(item => (
                        <div className='col-md-3 col-sm-6' key={item.id}>
                            <div className='service_benefits_box'>
                                <img src={item.benefits_icon} />
                                <h3>{item.benefits_title}</h3>
                                <p>{item.benefits_desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Benefits
