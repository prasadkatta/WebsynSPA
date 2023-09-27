import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../Styles/Breadcrumb.scss';
import backgroundImage from '../Images/breadcrumb.jpg';

const Breadcrumb = () => {

    const backgroundImageStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    if (pathnames.length === 0) {
        return null; // Don't render breadcrumbs on the home page
    }
    return (
        <div className='breadcrumb_section' style={backgroundImageStyle}>
            <ul className='breadcrumb'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {pathnames.map((path, index) => (
                    <li key={path}>
                        <Link to={`/${path}`}>{path}</Link>
                    </li>
                ))}
            </ul>
            <h1>{pathnames}</h1>
        </div>
    );
};

export default Breadcrumb
