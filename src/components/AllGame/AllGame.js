import React from 'react';
import './AllGame.css'

const AllGame = ({data ,addtocart}) => {
    const {name , time ,img} =data;

    return (
        <div className='game'>
            <div className='img-div'>
                <img src={img} alt="" />
            </div>
            <h5>{name}</h5>
            <p>Time required: <span className='time'>{time}</span> M</p>
            <button onClick={()=>addtocart(data)} className='btn-ad'>Add to cart</button>
        </div>
    );
};

export default AllGame;