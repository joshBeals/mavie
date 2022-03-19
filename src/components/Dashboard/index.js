import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/style.css';
import Footer from '../Footer';
import './Dashboard.css';
import Spinner from '../Spinner/Spinner';
import notes from '../../assets/images/notes.png';
import weight from '../../assets/images/weight.png';
import memory from '../../assets/images/memory.png';
import Cards from '../Cards';

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

    const logout = () => {
        window.localStorage.removeItem('mavie_token');
        navigate('/login');
    }

    return(
        <div className='main-body'>
            <div className='app-body'>
                <div className='dashboard-main'>
                    <h5><strong>Welcome Back, <br /> <span>{props.user.data.name}</span></strong></h5>
                    <div className='btn-holder'>
                        <button className='logout' onClick={logout}>Logout</button>
                    </div>
                </div>
                <div className='box-main mt-5'>
                    <Cards header="Memories" text="Save and share daily memories" color="#f97c4f" img={memory} />
                    <Cards header="Notes" text="Keep daily notes" color="#5979c3" img={notes} />
                    <Cards header="Weight Tracker" text="Track your weight daily" color="#18606c" img={weight} />
                </div>
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