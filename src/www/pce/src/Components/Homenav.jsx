
import React from 'react';
import './Homenav.css';
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";


function Navbar() {

            return (
            <div className="navBar">

                <button className="logo">logo</button>
    
                <select className="categoryDropdown">
                    <option selected value="all-cat">ALL</option>
                    <option value="cat-1">category1</option>
                    <option value="cat-2">category2</option>
                    <option value="cat-3">category3</option>
                    <option value="cat-4">category4</option>
                    <option value="cat-5">category5</option>
                </select>

               <input className="search_bar" type="text" size="55" placeholder="search product..." />
                <button className="search_btn"> <FaSearch /></button>
                <img  className="shopcart" src="/shopping_cart.svg" alt="error" />
                <button className="userSigning" ><FaUserCircle /> Sign up/Sign in </button>

        </div>
    )
}

export default Navbar;
