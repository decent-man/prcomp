import React from 'react';
import './Productdef.css';


const Productdef = ({ name, price, store, rating, returnPolicy, warranty, url}) => {
    return (
        <div className="header_container">
         <a href={url} target="_blank">
                <h4 className="name">{name}</h4>
            <p className="pricetag">{price}</p>
            <p><img className="storeIcon" src={store}></img></p>
            <p className="rating">
                 <img className="servIcon" src="./listing/rating.svg"></img>
               {rating}
            </p>
            <p className="returnpolicy">
                 <img className="servIcon" src="./listing/replace.svg"></img>
               {returnPolicy}
            </p>
            <p className="warranty">
                 <img className="servIcon" src="./listing/warranty.svg"></img>
            {warranty}</p>
         </a>
        </div>
    )
}

export default Productdef;
