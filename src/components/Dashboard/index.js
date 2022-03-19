import React from 'react';
import { connect } from 'react-redux';
import '../../assets/css/style.css';
import Footer from '../Footer';
import './Dashboard.css';

const Dashboard = (props) => {
    return(
        <div className='main-body'>
            <div className='app-body'>
                Dashboard
                <div className='footer'>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { auth: state.auth };
}

export default connect( mapStateToProps, {} )(Dashboard);