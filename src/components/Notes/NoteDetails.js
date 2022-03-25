import React, { useState, useEffect } from 'react';
import '../../assets/css/style.css';
import './Notes.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer';
import Header from '../Header';
import { connect } from 'react-redux';
import { editNote, fetchNote, deleteNote } from '../../actions';
import { useNavigate, useParams } from 'react-router-dom';
import _ from 'lodash';
import Spinner from '../Spinner/Spinner';

const NoteDetails = props => {

    const navigate = useNavigate();
    const params = useParams();

    const token = window.localStorage.getItem('mavie_token');

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if(!token || token == null){
            window.localStorage.removeItem('mavie_token');
            navigate('/login');
        }else{
            props.fetchNote(token, params.id);
        }
    }, []);

    const getNote = Object.values(props.notes.data).filter(note => note._id == params.id)[0];

    useEffect(() => {
        if(getNote){
            setTitle(getNote.title);
            setContent(getNote.content);
        }
    }, [getNote]);

    const onSubmit = (e) => {
        e.preventDefault();
        const formValues = { title: title, content: content }
        props.editNote(params.id, token, formValues);
        toast.info('Updating Note...', {
            position: "top-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const removeNote = (e) => {
        e.preventDefault();
        props.deleteNote(params.id, token);
        toast.info('Deleting Note...', {
            position: "top-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return(
        <div className='main-body'>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            ></ToastContainer>
            <div className='app-body'>
                <Header />
                <div style={{padding: '30px 20px'}}>
                    {getNote ? 
                    <form onSubmit={onSubmit}>
                        <div className='form-container form-group mt-4'>
                            <input type='text' className='form-control my-input' placeholder='Enter Title' onChange={e => setTitle(e.target.value)} value={title} />
                        </div>
                        <div className='form-container form-group mt-4'>
                            <textarea type='textarea' rows="3" className='form-control my-input' placeholder='Enter Content' onChange={e => setContent(e.target.value)} value={content} />
                        </div>
                        <div style={{display: 'flex'}}>
                            <button type='submit' className='mt-4 my-input' style={{marginRight: '10px'}}>Save</button>
                            <button onClick={removeNote} className='bg-danger mt-4 my-input'>Delete</button>
                        </div>
                    </form>:
                    <Spinner />}
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

export default connect(mapStateToProps, { fetchNote, editNote, deleteNote })(NoteDetails);