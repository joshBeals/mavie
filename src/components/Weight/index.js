import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import { fetchWeights } from '../../actions';
import Spinner from '../Spinner/Spinner';
import Empty from '../Empty';
import WeightItem from './WeightItem';

const Weight = (props) => {

    const navigate = useNavigate();

    const token = window.localStorage.getItem('mavie_token');

    useEffect(() => {
        if(!token || token == null){
            window.localStorage.removeItem('mavie_token');
            navigate('/login');
        }else{
            props.fetchWeights(token);
        }
    }, []);

    const renderWeights = Object.values(props.weights.data).map(weight => {
        return(
            <WeightItem key={weight._id} weight={weight} />
        );
    });

    if(props.weights.isLoading){
        console.log('hello');
        return(
            <div className='main-body'>
                <div className='app-body'>
                    <Header />
                    <Spinner />
                    <div className='footer'>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }


    return(
        <div className='main-body'>
            <div className='app-body'>
                <Header />
                <Link to='/weight/new'>
                    <div style={{width: '100%', padding: '0px 20px'}}>
                        <button className='long-btn'>Record New Weight</button>
                    </div>
                </Link>
                <div className='notes-main'>
                    {Object.keys(props.weights.data).length === 0 ? <Empty /> : renderWeights}
                </div>
                <div className='footer'>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { weights: state.weights }
}

export default connect(mapStateToProps, { fetchWeights })(Weight);