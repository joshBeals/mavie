import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import moment from 'moment';
import { deleteWeight } from '../../actions';

const WeightItem = (props) => {

    const removeWeight = () => {
        let token = window.localStorage.getItem('mavie_token');
        props.deleteWeight(props.weight._id, token);
        toast.success('Removed Weight Successfully', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return(
        <div className='d-flex mt-4' style={{borderBottom: '1px solid black'}}>
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
            <div className='flex-fill'>
                <h5><strong>{props.weight.weight} KG</strong> ({(props.weight.weight * 2.2).toFixed(2)} lbs)</h5>
                <p>{moment(props.weight.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
            <div className='flex-fill text-right d-flex justify-content-end align-items-center'>
                <i onClick={removeWeight} className="bi bi-trash text-danger" style={{fontSize: '24px', cursor: 'pointer'}}></i>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { weights: state.weights }
}

export default connect(mapStateToProps, { deleteWeight })(WeightItem);