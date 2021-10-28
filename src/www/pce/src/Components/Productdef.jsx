import React from 'react';
import './Productdef.css';


const Productdef = ({ name, price, store, rating, returnPolicy, warranty, url}) => {
    return (
        <div className="header_container">
         <a href={url} target="_blank">
                <h4 className="name">{name}</h4>
            <p className="pricetag">{price}</p>
            <p classNme="stores">{store}</p>
            <p classNme="rating">{rating}⭐</p>
            <p classNme="returnpolicy">{returnPolicy}</p>
            <p classNme="warranty">{warranty}</p>
         </a>
        </div>
    )
}

export default Productdef;
