import PropTypes from 'prop-types';
const Bottol= ({bottol,handelClick})=>{
    const{img,name,seller,price,stock}=bottol

    return(
        <>
        <div>
            <div className="w-full sm:w-64 p-4 rounded-lg shadow-md bg-white border border-green-200">
            <figure><img src={img} alt="Shoes" /></figure>
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-600 mb-2">Seller: {seller}</p>
            <p className="mb-2 text-xl font-bold text-green-600 mb-2">${price}</p> 
            <p className="text-sm text-gray-600">
             Availability:
            <span className="text-green-600 "> In Stock {stock}</span></p>
            <div className="card-actions justify-center mt-3">
            <button onClick={()=>handelClick(bottol)} className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300">Purchase</button>
            </div>
           </div>
       </div>
        </>
    )
}
Bottol.propTypes={
    bottol:PropTypes.object.isRequired,
    handelClick: PropTypes.func.isRequired
}
export default Bottol;