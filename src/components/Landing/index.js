import React from 'react';
import LandingImg from '../../assets/images/landing-min.jpg';
import '../../assets/css/style.css';
import './Landing.css'
import { Link } from 'react-router-dom';

const Landing = () => {
    return(
        <div className='main-body'>
            <div className='app-body'>
                <div className='landing-body'>
                    <div className='landing-logo'>
                        <h5>
                            <strong>Mavie</strong>
                        </h5>
                    </div>
                    <div className='landing-inner'>
                        <div className='landing-text'>
                            <h1>
                                <strong>Keep track of your <span>thoughts</span>, <span>activities</span> & make memories <span>everyday</span></strong>
                            </h1>
                        </div>
                        <div className='landing-img mt-5'>
                            <img src={LandingImg}></img>
                        </div>
                        <Link style={{width: '100%'}} to='/login'>
                            <div className='landing-btn mt-5 form-group'>
                                <button>Let's Go In</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;