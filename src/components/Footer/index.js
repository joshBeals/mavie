import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/style.css';
import './Footer.css';

const Footer = () => {
    return(
        <div className='footer-main'>
            <div className='row'>
                <div className='col-3'>
                    <Link to='/dashboard'>
                        <i className="bi bi-columns-gap"></i>
                    </Link>
                </div>
                <div className='col-3'>
                    <Link to='/notes'>
                        <i className="bi bi-file-text"></i>
                    </Link>
                </div>
                <div className='col-3'>
                    <Link to='/memories'>
                        <i className="bi bi-file-image"></i>
                    </Link>
                </div>
                <div className='col-3'>
                    <Link to='/weight'>
                        <i className="bi bi-heart-pulse"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;