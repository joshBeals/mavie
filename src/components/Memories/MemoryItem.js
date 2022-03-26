import React from 'react';
import './Memory.css';
import { Link } from 'react-router-dom';
import { prettyDate } from '../../helpers/prettyDate';

const MemoryItem = ({ memory }) => {

    const link = `/memory/${memory._id}`;

    return(
        <Link  to={link} style={{textDecoration: 'none', color: 'black'}}>
            <div className='card' style={{width: '100%', backgroundColor: 'ghostwhite', marginBottom: '20px', borderRadius: '8px', animation: 'show 200ms ease-in-out', cursor: 'pointer'}}>
                <img className='mem-img' src={memory.img_path} alt='memory img' />
                <div style={{padding: '10px'}}>
                    <h5 className='mt-3'><strong>{memory.description}</strong></h5>
                    <p>{memory.created_at}</p>
                </div>
            </div>
        </Link>
    );
};

export default MemoryItem;