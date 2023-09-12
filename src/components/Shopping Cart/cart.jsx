import PropTypes from 'prop-types';
const cart = ({cart, hadelRemove}) => {
    return (
        <div>
            <h1>Cart : {cart.length}</h1>

            <div>
                {   
                   
                    cart.map((cartP,idx)=> <div key={idx}>
                        <img className='W-10 h-20' src={cartP.img} alt="" /><button onClick={()=>{hadelRemove(cartP.id)}}>Remove</button>
                        
                    </div>)
                }
            </div>
        </div>
    );
};
cart.proptypes=
    {
        cart:PropTypes.object.isRequired,
        handelRemove: PropTypes.func.isRequired
    }

export default cart;