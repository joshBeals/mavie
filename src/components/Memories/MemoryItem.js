import React from 'react';
import { Link } from 'react-router-dom';
import { prettyDate } from '../../helpers/prettyDate';

const MemoryItem = ({ memory }) => {

    const link = `/memory/${memory._id}`;

    return(
        <Link  to={link} style={{textDecoration: 'none', color: 'black'}}>
            <div className='card' style={{backgroundColor: 'ghostwhite', marginBottom: '20px', borderRadius: '8px', animation: 'show 200ms ease-in-out', cursor: 'pointer'}}>
                <img src={memory.img_path} style={{borderRadius: '8px 8px 0px 0px'}} alt='memory img' />
                <div style={{padding: '10px'}}>
                    <h5 className='mt-3'><strong>{memory.description}</strong></h5>
                    <p>{prettyDate(memory.created_at)}</p>
                </div>
            </div>
        </Link>
    );
};

export default MemoryItem;