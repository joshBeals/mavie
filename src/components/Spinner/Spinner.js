import './Spinner.css';
import React from 'react';

const Spinner = () => {
    return(
        <div className='spinner'>
            <div className="spinner-border" style={{color: '#5979c3'}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Spinner;