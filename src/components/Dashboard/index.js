import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/style.css';
import Footer from '../Footer';
import './Dashboard.css';
import Spinner from '../Spinner/Spinner';

const Dashboard = (props) => {

    const navigate = useNavigate();

    useEffect(() => {
        let token = window.localStorage.getItem('mavie_token');
        if(!token || token == null){
            window.localStorage.removeItem('mavie_token');
            navigate('/login');
        }else{
            props.getUser(token);
        }
    }, []);

    if(props.user.length === 0){
        return(
            <div className='main-body'>
                <div className='app-body'>
                    <Spinner />
                    <div className='footer'>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }

    if(!props.user.success){
        window.localStorage.removeItem('mavie_token');
        navigate('/login');
    }

    return(
        <div className='main-body'>
            <div className='app-body'>
                {props.user.data.name}
                <div className='footer'>
                    <Footer />
                </div>
            </div>
        </div>
    );

};

const mapStateToProps = state => {
    return { user: state.user };
}

export default connect(mapStateToProps, { getUser })(Dashboard);