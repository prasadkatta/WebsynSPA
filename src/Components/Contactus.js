import React from 'react';
import '../Styles/Contactus.scss'
function Contactus() {
    return (
        <>
            <div className='contact_form_area'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='contact-right contact_details'>
                                <div className='hero-title-with-shape'>
                                    <h4 className='heading_with_border'>
                                        Contact with us
                                    </h4>
                                    <h1>We offer 24/7 emergency service to all of our customers</h1>
                                </div>
                                <p>There are many variations of passages of new lorem ipsum available, but the majority have suffered.</p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='contact-right'>
                                <form>
                                    <input className="half_width input_m_right" type="text" name="name" placeholder="Your name" />
                                    <input className="half_width" type="EMAIL" name="email" placeholder="Email address" />
                                    <input type="tel" name="tel" placeholder="Phone number" />
                                    <textarea name="content" id="content" cols="20" rows="5" placeholder="Write message"></textarea>
                                    <button type='button' className="btn-yellow" value="SUBMIT NOW">SUBMIT NOW</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contactus;