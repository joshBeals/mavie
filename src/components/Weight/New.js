import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer';
import Header from '../Header';
import { addWeight } from '../../actions';
import { connect } from 'react-redux';

const AddWeight = (props) => {

    const [text, setText] = useState('');
    const [lbs, setLbs] = useState('');

    const convert = e => {
        setText(e.target.value);
        setLbs((e.target.value * 2.2).toFixed(2));
    }

    const validated = () => {
        if(!text){
            toast.error('Please enter a valid weight!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return false
        }else{
            return true;
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        if(validated()){
            let formData = { weight: text };
            let token = window.localStorage.getItem('mavie_token');
            props.addWeight(token, formData);
        }
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
                <div style={{padding: '30px'}}>
                    <h3 className='mt-3 text-center'>Record New Weight</h3>
                    <form onSubmit={submitForm}>
                        <div className='form-group mt-4'>
                            <label>Weight (in KG)</label>
                            <input type="number" className='form-control my-input' onChange={convert} value={text} />
                        </div>
                        <div className='form-group mt-4'>
                            <label>Weight (in Pounds (lbs))</label>
                            <input disabled type="text" className='form-control my-input' value={lbs} />
                        </div>
                        <button className='mt-4 my-input'>Add Weight Record</button>
                    </form>
                </div>
                <div className='footer'>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { weights: state.weights };
}

export default connect(mapStateToProps, { addWeight })(AddWeight);