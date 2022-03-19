import React from 'react';

const Cards = (props) => {
    return(
        <div className='box row' style={{backgroundColor: props.color}}>
            <div className='box-left col-4'>
                <img src={props.img} />
            </div>
            <div className='box-right col-8'>
                <h5><strong style={{color: 'white'}}>{props.header}</strong></h5>
                <p style={{color: 'white'}}>{props.text}</p>
            </div>
        </div>
    );
};

export default Cards;