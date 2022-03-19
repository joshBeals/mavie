import './Spinner/Spinner.css';
import empty from '../assets/images/empty.png';
import React from 'react';

const Empty = () => {
    return(
        <div className='spinner'>
            <img style={{width: '100px', animation: 'show 200ms ease-in-out'}} src={empty} />
        </div>
    );
}

export default Empty;