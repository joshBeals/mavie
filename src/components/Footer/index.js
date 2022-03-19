import React from 'react';
import '../../assets/css/style.css';
import './Footer.css';

const Footer = () => {
    return(
        <div className='footer-main'>
            <div className='row'>
                <div className='col-3'>
                    <i className="bi bi-columns-gap"></i>
                </div>
                <div className='col-3'>
                    <i className="bi bi-file-text"></i>
                </div>
                <div className='col-3'>
                    <i className="bi bi-file-image"></i>
                </div>
                <div className='col-3'>
                    <i className="bi bi-grid"></i>
                </div>
            </div>
        </div>
    );
};

export default Footer;