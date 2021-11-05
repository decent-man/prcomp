import React, { useEffect, useState } from 'react';
import { BsFillInfoCircleFill } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi"

import Productdef from "./Productdef";
import './Listing.css';
import './spinner.css';
import { useLocation } from "react-router-dom";
//import axios from 'axios';

  function useQuery() {
      return new URLSearchParams(useLocation().search);
  }

const Specifications = ({specifications}) => {
  let specs = specifications;
  try {
    specs = JSON.parse(specifications);
  }
  catch(err) { return (<h5 className="unavail"> Unavailable </h5>) }
  //console.log(specs);
  return (
    <table className="specTable">
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

  let name = prod.name;
  if (!isNaN(prod.price)) { 
    return null;
  }

  if(name.length > 110) {
    name = `${name.slice(0,110)}...`
  }

              //<h2 class="popover__title"><BsFillInfoCircleFill /></h2>
  return (
    <>
          <div className="leftdiv">
          <div className="prod_img">
          <a src={prod.url} target="_blank">
            <img src={prod.img} alt="error"/>
          </a>
          </div>

          <Productdef
            name={name}
            price={prod.price}
            store={"./listing/" + prod.store + ".png"}
            url={prod.url}
            warranty={prod.warranty}
            returnPolicy={prod.return_replace}
            //availibility="Availibility"
            rating={Math.floor(Math.random() * (2) ) + 3}
          />

          <div class="popover__wrapper">
            
              <h2 class="popover__title"><HiOutlineInformationCircle /></h2>
            
            <div class="popover__content">
              <p class="popover__message"><h3 className="specHead">Specifications</h3>
                <Specifications specifications={(prod.specs)}/>
              </p>
            </div>
          </div>
        </div>
        
        </>
  )
}
function Listing() {
      let query = useQuery();
      const cat = query.get('cat');
      const search = query.get('search');
      const [products,setProducts] = useState([]);
      const [loading,setLoading] = useState(false);
      document.title = "kilowog(" + cat + ") =>[" + search + "]";
      const getProducts = async(url) => {
        setLoading(true);
        try{
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
        //console.log(res)
        const response = await res.json();
        //const amazon = response?.listings[0] ?? [];
        //const flipkart = response?.listings[1] ?? [];
        //const resFinal = [...amazon,...flipkart]
        const resFinal = response?.listings ?? [];
        //console.log(resFinal)
        setLoading(false);
        setProducts(resFinal);
        }
        catch(err) { setLoading(false) }

      }
      useEffect(() => {
        const searchUrl = search.split(/\s+/).join('+');
        const reqUrl = `http://localhost:8000/${cat}/${searchUrl}`;
        //console.log(reqUrl,search);
        getProducts(reqUrl);
      },[cat,search])
    
      if(loading){
      //if(true){
        return (
          <div className='spinnerContainer'>
            <div className='loader'></div>
            <p className='loaderText'>Fetching..</p>
          </div>
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

export default Listing;
