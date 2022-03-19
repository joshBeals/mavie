import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner/Spinner';

const Header = (props) => {

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
            <Spinner />
        );
    }

    if(!props.user.success){
        window.localStorage.removeItem('mavie_token');
        navigate('/login');
    }

    const logout = () => {
        window.localStorage.removeItem('mavie_token');
        navigate('/login');
    }

    return(
        <div className='dashboard-main'>
            <h5><strong>Welcome Back, <br /> <span>{props.user.data.name}</span></strong></h5>
            <div className='btn-holder'>
                <button className='logout' onClick={logout}>Logout</button>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { user: state.user };
}

export default connect(mapStateToProps, { getUser })(Header)