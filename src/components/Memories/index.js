import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/style.css';
import Footer from '../Footer';
import Header from '../Header';

const Memories = () => {
    return(
        <div className='main-body'>
            <div className='app-body'>
                <Header />
                <Link to='/memories/new'>
                    <div style={{width: '100%', padding: '0px 20px'}}>
                        <button className='long-btn'>Add New Memory</button>
                    </div>
                </Link>
                <div className='footer'>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Memories;