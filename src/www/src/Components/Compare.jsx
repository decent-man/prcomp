import React, { useState, useEffect, useRef, useCallback } from "react";

import { ReactComponent as Scale } from './list/compare.svg';

import './Compare.css';

const CompareCheck = ({pid,CSet,setCSet}) => {
    const [isCmpActive, setCmpActive] = useState(false);
    const onCbtnClick = () => setCmpActive(!isCmpActive);
    useEffect(() => {
        if (isCmpActive) {
            setCSet(c => new Set([...c, pid]));
            //setCSet(c => [...c, pid]);
        }
        else { 
            setCSet(c => new Set([...c].filter(item => item!= pid)));
            //setCSet(c =>[...c].filter(item => item!= pid));
        }
    },[isCmpActive]);
    return (
        <>
            <div className={`compareBtn ${isCmpActive ? 'check': ''}`} onClick={onCbtnClick}>
              <Scale/>
            </div>
        </>
    )
};

const CompareTable = ({cProducts}) => {

    return (
        <>
            <table className="compareTable">
                <tr className="row_img">
                    <th /> {/* Common specs*/}
                    {
                        cProducts.map(product => {
                            return (
                                <td><img className="cProdImg" src={product.img} alt="error"/></td>
                        )})
                    }
                </tr>
                <tr className="row_pname">
                    <th className="cTH">Name</th>
                    {
                        cProducts.map(product => { return( <td> {product.name} </td>)})
                    }
                </tr>
            </table>
        </>
    )
};

const Compare = ({products,CSet}) => {
    let [len, setLen] = useState(CSet.size);
    //let [len, setLen] = useState(CSet.length);
    const filterProducts = (c1,c2) => { return c1.filter(elem => c2.has(elem.id))}
    const [prodData, setProdData] = useState([]); 

    const [isCWinActive, toggleCWin] = useState(false);
    const onCBarClick = () => toggleCWin(!isCWinActive);

    useEffect(()=> {
        //setProdData(products.filter(product => CSet.has(product.id)));
        setLen(CSet.size);
        setProdData(filterProducts(products,CSet));
        console.log(CSet,prodData);
    },[CSet]);

    return (
        <>
            <div onClick={onCBarClick} className={`compareBar ${len > 1 ? 'active': 'inactive'}`}>
                <h6>{len} items to compare..</h6>
            </div>
            <div className={`compareWindow ${isCWinActive ? 'active': ''}`}>
                <CompareTable cProducts={prodData} />
            </div>
        </>
    )
};

export { Compare, CompareCheck };
