import React from 'react';
import './Productdef.css';


const Productdef = ({ name, price, availibility, rating, returnPolicy}) => {
    return (
        <div className="header_container">
            <h4 className="name">{name}</h4>
            <p className="pricetag">{price}</p>
            <p classNme="stores">{availibility}</p>
            <p classNme="rating">{rating}</p>
            <p classNme="returnpolicy">{returnPolicy}</p>
        </div>

    )
}

export default Productdef;
