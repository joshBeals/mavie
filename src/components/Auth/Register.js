import React from 'react';
import { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import '../../assets/css/style.css';
import './Auth.css';
import { register } from '../../actions';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

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
    return(
        <div className='form-container form-group mt-4'>
            <input type={type} className='form-control' {...input} placeholder={label} />
            {renderError(meta)}
        </div>
    );
}


const Register = (props) => {

    const onSubmit = (formValues) => {
        props.register(formValues);
        toast.info('Processing...', {
            position: "top-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    
    let navigate = useNavigate();

    useEffect(() => {
        notify();
    }, [props.registerAuth]);

    const notify = () => {

        const toastVar = {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        };

        if(props.registerAuth.length !== 0){
            if(props.registerAuth.success){
                toast.success(`${props.registerAuth.message}`, toastVar);
                navigate('/login');
            }else{
                toast.error(`${props.registerAuth.errorMessage}`, toastVar);
            }
        }
    }

    return(
        <div>
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
            <div className='main-body'>
                <div className='app-body'>
                    <div className='auth-body'>
                        
                        <h2 className='mb-5'><strong>Registration</strong></h2>
                        <form onSubmit={props.handleSubmit(onSubmit)}>
                            <Field name='name' type='text' component={renderInput} label="Name" />
                            <Field name='email' type='text' component={renderInput} label="Email Address" />
                            <Field name='password' type='password' component={renderInput} label="Password" />
                            <button className='mt-4'>Register</button>
                            <p className='text-center mt-4'>Already have an account? <Link to='/login'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const validate = formValues => {
    const errors = {};
    if(!formValues.name){
        errors.name = 'You must enter a name!';
    }
    if(!formValues.email){
        errors.email = 'You must enter a valid email!';
    }
    if(!formValues.password){
        errors.password = 'You must enter your password!';
    }

    return errors;
}

const formWrapped =  reduxForm({ form: 'register', validate })(Register);

const mapStateToProps = (state) => {
    return { registerAuth: state.registerAuth };
}

export default connect(mapStateToProps, { register })(formWrapped);