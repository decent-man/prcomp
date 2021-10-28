import React, { useEffect, useState } from 'react';
import Listingcontainer from './Components/Listingcontainer';
import Listingnav from './Components/Listingnav';
import Productdef from "./Components/Productdef";
import { BsFillInfoCircleFill } from "react-icons/bs";



import './Productlistpage.css';
import {
    useLocation
  } from "react-router-dom";
  import axios from 'axios';

  function useQuery() {
      return new URLSearchParams(useLocation().search);
  }

const ProductDiv = ({prod}) => {

  return (
    <div className='product-container'>
          <div className="leftdiv">
          <div className="prod_img">
            <img src={prod.IMG} alt="error" />
          </div>

          <Productdef
            name={prod.NAME}
            price={prod.PRICE}
            availibility="Availibility"
            rating="4.7"

          />

          <div class="popover__wrapper">
            
              <h2 class="popover__title"><BsFillInfoCircleFill /></h2>
            
            <div class="popover__content">
              <p class="popover__message">Specifications</p>
            </div>
          </div>
        </div>
        
        </div>
  )
}
function Productlistpage() {
      let query = useQuery();
      const cat = query.get('cat');
      const search = query.get('search');
      const [products,setProducts] = useState([]);
      const getProducts = async(url) => {
        const res = await axios.get(url);
        const result = res.data?.RESULTS ?? [];
        console.log(res);
        setProducts(result);
      }
      useEffect(() => {
        const searchUrl = search.split(/\s+/).join('+');
        const reqUrl = `http://127.0.0.1:8000/${cat}/${searchUrl}`;
        console.log(reqUrl,search);
        getProducts(reqUrl);
      },[cat,search])
    return (
      <>
        {
          products.map(prod => {
            return (
              <ProductDiv prod={prod}/>
            )
          })
        }
        </>
    )
}

export default Productlistpage;
