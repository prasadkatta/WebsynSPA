import React, { useState } from 'react';
import '../Styles/Footer.scss'
function Footer() {
  const [Quicklinks] = useState([
    { id: 1, label: 'About', link: '/about', openInNewTab:false },
    { id: 2, label: 'Services', link: '/services', openInNewTab:false },
    { id: 3, label: 'Contact', link: '/contact', openInNewTab:false },
    { id: 4, label: 'Careers', link: 'https://www.websynergies.com/en/discover-more/careers/',  openInNewTab:true },
    { id: 5, label: 'Casestudies', link: 'https://www.websynergies.com/en/discover-more/Case-Studies/', openInNewTab:true },
    { id: 6, label: 'Testimonials', link: 'https://www.websynergies.com/en/discover-more/testimonials/', openInNewTab:true },
    { id: 7, label: 'Privacy Policy', link: 'https://www.websynergies.com/en/privacy-policy/', openInNewTab:true },
    { id: 8, label: 'News', link: 'https://www.websynergies.com/en/discover-more/news/', openInNewTab:true },
  ]);

  return (
    <div className='footer_content'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 col-sm-6'>
            <h2>About Web Synergies</h2>
            <p>
              At Lennom, We don’t just provide resi-dential and commercial heating and air conditioning services; we make people’s lives easier. Better.
            </p>
          </div>
          <div className='col-md-4 col-sm-6'>
            <h2>Quick Links</h2>
            <ul className='footer_link'>
              {Quicklinks.map((item) => (
                <li key={item.id}>
                  <a target={item.openInNewTab ? '_blank' : '_self'} href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className='col-md-4 col-sm-6'>
            <div className='newslatter'>
              <h2>Newsletter</h2>
              <input type="EMAIL" placeholder="Enter your email"></input>
              <button className="btn-yellow" value="SUBMIT NOW">SUBSCRIBE</button>
            </div>
          </div>

        </div>
        <div className='copyright_area'>
          <div className='row align-items-center'>
            <div className='col-md-8 col-sm-6 copyright_text'>
              <p>© Copyright 2023 Web Synergies (S) Pte Ltd</p>
            </div>
            <div className='col-md-4 col-sm-6 copyright_social text-right'>
              <ul>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fa fa-youtube-play"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Footer;