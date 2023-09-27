import logo from '../logo.svg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.scss'
function Header() {

    const [menuItems] = useState([
        { id: 1, label: 'Home', link: '/' },
        { id: 2, label: 'About', link: '/about' },
        { id: 3, label: 'Services', link: '/services' },
        { id: 4, label: 'Contact', link: '/contact' },
    ]);

    return (
        <div className="main_menu_area">
            <div className='container'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="log" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                {menuItems.map((item) => (
                                    <li className="nav-item" key={item.id}>
                                        <Link  className="nav-link active" aria-current="page" to={item.link}>{item.label}</Link >
                                    </li>
                                ))}
                            </ul>
                            <div className='header_right_btn'>
                                <a className="btn-yellow" href="#">BOOK TODAY</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;

