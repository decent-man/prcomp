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

const Specifications = ({specs}) => {

  return (
    <table>
      {
        Object.keys(specs).map(key => {
          const value = specs[key];
          return (
            <tr className='spec'>
              <td>
                {key}
              </td>
              <td style={{wordWrap:'normal'}}>
                {value}
              </td>
            </tr>
          )
        })
      }
    </table>
  )
}
const ProductDiv = ({prod}) => {

  let name = prod.NAME;

  if(name.length > 110) {
    name = `${name.slice(0,110)}...`
  }

  return (
    <>
          <div className="leftdiv">
          <div className="prod_img">
            <img src={prod.IMG} alt="error" />
          </div>

          <Productdef
            name={name}
            price={prod.PRICE}
            availibility="Availibility"
            rating="4.7"

          />

          <div class="popover__wrapper">
            
              <h2 class="popover__title"><BsFillInfoCircleFill /></h2>
            
            <div class="popover__content">
              <p class="popover__message">
                <h3>

                <strong>Specifications</strong>
                </h3>
                <Specifications specs={prod.SPECS}/>
              </p>
            </div>
          </div>
        </div>
        
        </>
  )
}
function Productlistpage() {
      let query = useQuery();
      const cat = query.get('cat');
      const search = query.get('search');
      const [products,setProducts] = useState([]);
      const [loading,setLoading] = useState(false);
      const getProducts = async(url) => {
        setLoading(true);
        // ------------AXIOS -----------------
        // const res = await axios.get(url);
        // let jsonRes = res.data;
        // try{
        //   jsonRes = JSON.parse(res.data);
        // }
        // catch(err){
        //   console.log(err)
        // }
        // const result = jsonRes?.RESULTS ?? [];
        // console.log(res);
        
        // --------------FETCH---------------
        const res =  await fetch(url);
        const response = await res.json();
        const result = response?.RESULTS ?? [];
        console.log(response)

        setLoading(false);
        setProducts(result);
      }
      useEffect(() => {
        const searchUrl = search.split(/\s+/).join('+');
        const reqUrl = `http://127.0.0.1:8000/${cat}/${searchUrl}`;
        console.log(reqUrl,search);
        getProducts(reqUrl);
      },[cat,search])
    
      if(loading){
        return (

          <div className='loading'></div>
        )
      }
    return (
      <div className='product-container'>
        {
          products.map(prod => {
            return (
              <ProductDiv prod={prod}/>
            )
          })
        }
        </div>
    )
}

export default Productlistpage;
