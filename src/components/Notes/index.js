import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/style.css';
import './Notes.css';
import Footer from '../Footer';
import Spinner from '../Spinner/Spinner';
import Header from '../Header';
import { fetchNotes } from '../../actions';
import Empty from '../Empty';

const Notes = (props) => {

    const navigate = useNavigate();

    useEffect(() => {
        let token = window.localStorage.getItem('mavie_token');
        if(!token || token == null){
            window.localStorage.removeItem('mavie_token');
            navigate('/login');
        }else{
            props.fetchNotes(token);
        }
    }, []);

    const renderNotes = () => {
        if(_.isEmpty(props.notes)){
            return <Empty />
        }else{
            return(
                <div>hello</div>
            );
        }
    }

    return(
        <div className='main-body'>
            <div className='app-body'>
                <Header />
                <Link to='/notes/new'>
                    <div style={{width: '100%', padding: '0px 30px'}}>
                        <button className='long-btn'>Add Note</button>
                    </div>
                </Link>
                <div>
                    {renderNotes()}
                </div>
                <div className='footer'>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { notes: state.notes };
}

export default connect(mapStateToProps, { fetchNotes })(Notes);