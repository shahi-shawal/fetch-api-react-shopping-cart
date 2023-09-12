const getStoreCart = () =>{
    const storeCartsting=localStorage.getItem('cart');
    if (storeCartsting) {
        return JSON.parse(storeCartsting);
    }
    return [];
}
 
const saveToLs =(cart)=>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addToLs = (id)=>{
    const cart= getStoreCart();
    cart.push(id);
    // save To local Storage 
    saveToLs(cart)
}

const removeToLs= id=>{
    const cart = getStoreCart();
    // remove every id 
    const remaining = cart.filter((idx)=> idx !== id);
    saveToLs(remaining)
}

export {addToLs, getStoreCart, removeToLs} 