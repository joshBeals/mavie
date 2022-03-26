import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Footer from '../Footer';
import Header from '../Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchMemory, deleteMemory } from '../../actions';
import { useNavigate, useParams } from 'react-router-dom';
import { prettyDate } from '../../helpers/prettyDate';
import Spinner from '../Spinner/Spinner';

const MemoryDetails = (props) => {

    const navigate = useNavigate();
    const params = useParams();
    const token = window.localStorage.getItem('mavie_token');

    useEffect(() => {
        if(!token || token == null){
            window.localStorage.removeItem('mavie_token');
            navigate('/login');
        }else{
            props.fetchMemory(token, params.id);
        }
    }, []);

    const getNote = Object.values(props.memories.data).filter(memory => memory._id == params.id)[0];

    const removeMemory = () => {
        props.deleteMemory(params.id, token);
        toast.info('Deleting Memory...', {
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
                {getNote ? 
                <div style={{width: '100%', padding: '30px 20px 90px 20px'}}>

                    <div style={{padding: '30px 0px'}}>
                        <div className='card' style={{backgroundColor: 'ghostwhite', marginBottom: '20px', borderRadius: '8px', animation: 'show 200ms ease-in-out', cursor: 'pointer'}}>
                            <img src={getNote.img_path} style={{borderRadius: '8px 8px 0px 0px'}} alt='memory img' />
                            <div style={{padding: '10px'}}>
                                <h5 className='mt-3'><strong>{getNote.description}</strong></h5>
                                <p>{prettyDate(getNote.created_at)}</p>
                            </div>
                        </div>
                    </div>
                    
                    <button onClick={removeMemory} className='form-control bg-danger text-white my-input'>Delete Memory</button>

                </div>: 
                <Spinner />}
                <div className='footer'>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { memories: state.memories };
}

export default connect(mapStateToProps, { fetchMemory, deleteMemory })(MemoryDetails);