import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer';
import Header from '../Header';

const AddMemory = () => {

    const [text, setText] = useState('');
    const [image, setImage] = useState();

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        previewFile(file);
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
        };
    }

    const validated = () => {
        if(!text || !image){
            const toastVar = {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            };
            toast.error('No field should be left empty!', toastVar);
            // return false;
        }else{
            return true;
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        if(validated()){
            console.log(text);
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
                    <h3 className='mt-3 text-center'>Add New Memory</h3>
                    <form onSubmit={submitForm}>
                        <div className='form-group mt-4'>
                            <label>Describe Your Memory</label>
                            <input type="text" className='form-control my-input' onChange={e => setText(e.target.value)} value={text} />
                        </div>
                        <div className='form-group mt-4'>
                            <label>Choose Image</label>
                            <input type="file" className='form-control my-input' onChange={handleFileInput} />
                            {image && (
                                <img src={image} alt="Memory Image" className='mt-4' style={{height: '150px'}} />
                            )}
                        </div>
                        <button className='mt-4 my-input'>Add Memory</button>
                    </form>
                </div>
                <div className='footer'>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default AddMemory;