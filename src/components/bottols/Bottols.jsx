import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Shopping Cart/cart";
import { addToLs, getStoreCart, removeToLs } from "../utilitis/localstorage";
import Bottol from '../bottole/bottol';

const Bottols = () => {
    const [bottolValue, setBottle]=useState([]);
    useEffect(()=>{
        fetch('bottoles.json')
        .then(res=> res.json())
        .then(data=> setBottle(data));
    },[])
    useEffect(()=>{
        console.log(bottolValue);
        if (bottolValue.length>0) {
            const storeCartId = getStoreCart();
            console.log(storeCartId,bottolValue);
            const saveCart=[]
            for (const id of storeCartId) {
                const bottle= bottolValue.find(bottle=> bottle.id === id);
                if (bottle) {
                    saveCart.push(id)
                }
            }
            console.log('save Cart', saveCart);
            setCart(saveCart)
        }

    },[bottolValue])
    const [cartId,setCart]=useState([])
    const handelClick=(bottol)=>{
        const newCartID = [...cartId,bottol];
        setCart(newCartID);
        addToLs(bottol.id)
    }
    
    const hadelRemove = id=>{
        const remainingCart = cartId.filter((bottle)=> bottle.id !==id);
        setCart(remainingCart)
        removeToLs(id)
    }
    return (
        <div>
            <h1 className="text-3xl pt-6 mb-2">Bottols</h1>
            <Cart cart={cartId} hadelRemove={hadelRemove}></Cart>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                bottolValue.map((bottol=> <Bottol handelClick={handelClick} key={bottol.id} bottol={bottol}></Bottol>))
            }
            </div>
            <div>
               
            </div>

        </div>
    );
};

Bottols.PropTypes={
 Bottols:PropTypes.array
}
export default Bottols;