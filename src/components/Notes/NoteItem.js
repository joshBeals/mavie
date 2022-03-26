import React from 'react';
import { Link } from 'react-router-dom';
import { prettyDate } from '../../helpers/prettyDate';

const NoteItem = ({ note }) => {

    const colors = ['#18606c', '#7276b3', '#f97c4f', '#555555', '#5979c3', '#0c1058', '#517dab', '#fcc344', '#4b041e'];

    const getColor = () => {
        return Math.floor(Math.random() * 8);
    }

    const link = `/note/${note._id}`;

    return(
        <Link to={link} style={{textDecoration: 'none'}}>
            <div className='note-list' style={{backgroundColor: `${colors[getColor()]}`}}>
                <h5><strong>{note.title}</strong></h5>
                <p>{note.created_at}</p>
            </div>
        </Link>
    );
};

export default NoteItem;