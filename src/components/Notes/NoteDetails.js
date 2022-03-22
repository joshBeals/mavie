import React, { useState } from 'react';
import '../../assets/css/style.css';
import './Notes.css';
import { Field, reduxForm } from 'redux-form';
import { useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { connect } from 'react-redux';
import { editNote, fetchNote, deleteNote } from '../../actions';
import { useNavigate, useParams } from 'react-router-dom';
import _ from 'lodash';

const NoteDetails = props => {

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        let token = window.localStorage.getItem('mavie_token');
        if(!token || token == null){
            window.localStorage.removeItem('mavie_token');
            navigate('/login');
        }else{
            props.fetchNote(token, params.id);
        }
    }, []);

    const getNote = Object.values(props.notes).filter(note => note._id == params.id);

    const renderError = ({ touched, error }) => {
        if(touched && error){
            return(
                <div className='text-danger'>
                    {error}
                </div>
            );
        }
    }
    
    const renderInput = ({ input, label, type, content, meta }) => {
        if(type == 'input'){
            return(
                <div className='form-container form-group mt-4'>
                    <input type={type} className='form-control my-input' {...input} placeholder={content} />
                    {renderError(meta)}
                </div>
            );
        }else{
            return(
                <div className='form-container form-group mt-4'>
                    <textarea type={type} rows="3" className='form-control my-input' {...input} placeholder={content} />
                    {renderError(meta)}
                </div>
            );
        }
        
    }

    const onSubmit = (formValues) => {
        let token = window.localStorage.getItem('mavie_token');
        props.editNote(params.id, token, formValues);
        navigate('/notes');
    }

    const removeNote = (e) => {
        e.preventDefault();
        let token = window.localStorage.getItem('mavie_token');
        props.deleteNote(params.id, token);
        navigate('/notes');
    }

    return(
        <div className='main-body'>
            <div className='app-body'>
                <Header />
                <div style={{padding: '30px 20px'}}>
                    <form onSubmit={props.handleSubmit(onSubmit)}>
                        <Field name='title' type='input' content={_.isEmpty(getNote) ? '' : getNote[0].title} component={renderInput} label="Title" />
                        <Field name='content' type='textarea' content={_.isEmpty(getNote) ? '' : getNote[0].content} component={renderInput} label="Content" />
                        <div style={{display: 'flex'}}>
                            <button type='submit' className='mt-4 my-input' style={{marginRight: '10px'}}>Save</button>
                            <button onClick={removeNote} className='bg-danger mt-4 my-input'>Delete</button>
                        </div>
                    </form>
                </div>
                <div className='footer'>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

const validate = formValues => {
    const errors = {};
    if(!formValues.title){
        errors.title = 'Title field cannot be left empty!';
    }
    if(!formValues.content){
        errors.content = 'Content field cannot be left empty!';
    }

    return errors;
}

const formWrapped =  reduxForm({ form: 'editNote', validate })(NoteDetails);

const mapStateToProps = state => {
    return { notes: state.notes };
}

export default connect(mapStateToProps, { fetchNote, editNote, deleteNote })(formWrapped);