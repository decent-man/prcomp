
import React, { useState } from 'react';
import './Homenav.css';
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import axios from 'axios';
import {useHistory} from 'react-router-dom'


function Navbar() {
    
    const categories = [
        {
            name:'Electronics',
            url:'elx'
        },
        {
            name:'Clothing',
            url:'clo'
        },
        {
            name:'Furniture',
            url:'fur'
        }
    ]
    const history = useHistory();
    const [selectedCategory,setSelectedCategory] = useState(categories[0]);
    const [searchWord,setSearchWord] = useState('');
        const handleCategoryChange = (e) => {
            e.preventDefault();
            const {value} = e.target;
            console.log(categories.filter(elem => elem.url === value)[0]);
            setSelectedCategory(categories.filter(elem => elem.url === value)[0]);

        }
        const handleSearch = (e) => {
            const searchUrl = searchWord.split(/\s+/).join('+');
            const {url,name} = selectedCategory;
            history.push(`/results?cat=${url}&search=${searchUrl}`);
        }
            return (
            <div className="navBar">

                <div onClick={() => history.push('/')} style={{
                    cursor:'pointer'
                }}>
                    <img src="/storeFront.svg" alt="" />
                </div>
                <div style={{display:'flex'}} >

                <select className="categoryDropdown"   onChange={handleCategoryChange}>
                    {
                        categories.map(({name,url}) => {
                            return (
                                <option value={url} name={name}>{name}</option>
                                )
                            })
                        }
                </select>

               <input className="search_bar" type="text" size="55" placeholder="search product..." value={searchWord} onChange={(e) => setSearchWord(e.target.value)} />
                <button className="search_btn" onClick={handleSearch} > <FaSearch /></button>
                 </div>
                 <div style={{
                     display:'flex',
                     alignItems:'center',
                     gap:'2rem'
                 }}>

                <img  className="shopcart" src="/shopping_cart.svg" alt="error" />
                <div className="userSigning" ><FaUserCircle />  </div>
                 </div>

        </div>
    )
}

export default Navbar;
