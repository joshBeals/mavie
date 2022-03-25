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
import NoteItem from './NoteItem';

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

    const renderNotes = Object.values(props.notes.data).map(note => {
        return(
            <NoteItem key={note._id} note={note} />
        );
    });

    if(props.notes.isLoading){
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
                <Link to='/notes/new'>
                    <div style={{width: '100%', padding: '0px 20px'}}>
                        <button className='long-btn'>Add Note</button>
                    </div>
                </Link>
                <div className='notes-main'>
                    {Object.keys(props.notes.data).length === 0 ? <Empty /> : renderNotes}
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