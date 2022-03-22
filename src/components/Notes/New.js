import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import '../../assets/css/style.css';
import '../Auth/Auth.css'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/style.css';
import './Notes.css';
import Footer from '../Footer';
import Header from '../Header';
import { addNote } from '../../actions';

const renderError = ({ touched, error }) => {
    if(touched && error){
        return(
            <div className='text-danger'>
                {error}
            </div>
        );
    }
}

const renderInput = ({ input, label, type, meta }) => {
    if(type == 'input'){
        return(
            <div className='form-container form-group mt-4'>
                <input type={type} className='form-control my-input' {...input} placeholder={label} />
                {renderError(meta)}
            </div>
        );
    }else{
        return(
            <div className='form-container form-group mt-4'>
                <textarea type={type} rows="3" className='form-control my-input' {...input} placeholder={label} />
                {renderError(meta)}
            </div>
        );
    }
    
}


const AddNote = (props) => {

    const navigate = useNavigate();

    const onSubmit = (formValues) => {
        let token = window.localStorage.getItem('mavie_token');
        props.addNote(token, formValues);
        navigate('/notes');
    }

    return(
        <div className='main-body'>
            <div className='app-body'>
                <Header />
                <div style={{padding: '30px'}}>
                    <h3 className='mt-3 text-center'>Add New Note</h3>
                    <form onSubmit={props.handleSubmit(onSubmit)}>
                        <Field name='title' type='input' component={renderInput} label="Title" />
                        <Field name='content' type='textarea' component={renderInput} label="Content" />
                        <button className='mt-4 my-input'>Add Note</button>
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

const formWrapped =  reduxForm({ form: 'addNote', validate })(AddNote);

const mapStateToProps = state => {
    return { notes: state.notes };
}

export default connect(mapStateToProps, { addNote })(formWrapped);