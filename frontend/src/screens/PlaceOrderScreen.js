import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';

export default function PlaceOrderScreen(props){
    const cart=useSelector(state=>state.cart);
    if(!cart.paymentMethod){
        props.history.push('/payment');
    }

    const toPrice=(num)=>{ return(Number(num.toFixed(2)))};
        cart.itemsPrice=toPrice(cart.cartItems.reduce((a,c)=>a+c.qty*c.price,0))
        cart.shippingPrice=cart.itemsPrice>1000? toPrice(0): toPrice(40);
        cart.taxPrice=toPrice(0.05*cart.itemsPrice);
        cart.totalPrice=cart.itemsPrice+cart.shippingPrice+cart.taxPrice;
    
        const placeOrderHandler=(e)=>{
            e.preventDefault();
        }
    return(
        <div>
            {console.log(cart.itemsPrice)}
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className='row top'>
                <div className='col-2'>
                    <ul>
                        <li className='cart'>
                            <div className='card card-body'>
                                <h2>
                                    Shipping
                                </h2>
                                <p>
                                    <strong>Name: </strong>
                                    {cart.shippingAddress.fullName}<br/>
                                    <strong>Address: </strong>{cart.shippingAddress.address},{cart.shippingAddress.city},{cart.shippingAddress.postalCode},{cart.shippingAddress.country}
                                </p>
                            </div>

                        </li>
                        <li className='cart'>
                            <div className='card card-body'>
                                <h2>
                                    Payment
                                </h2>
                                <p>
                                <strong>Method: </strong>   {cart.paymentMethod}
                                </p>
                            </div>

                        </li>
                        <li className='cart'>
                            <div className='card card-body'>
                                <h2>
                                    Order Items
                                </h2>
                    <ul>
                        {
                            cart.cartItems.map((item)=>(
                                
                                <li key={item.product}>
                                    <div className="row">
                                        <div>
                                            <img 
                                            src={item.image} 
                                            alt={item.name} 
                                            className="small"></img>
                                        </div>
                                        <div className="min-30">
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </div>
                                        <div>
                                           {item.qty} *  {item.price} = Rs {item.qty*item.price}/=
                                        </div>
                                    </div>
                                </li>
                ))
                        }
                    </ul>
            
                            </div>

                        </li>
                    </ul>
                </div>
                <div className='col-1'>
                    <div className='card card-body'>
                        <ul>
                            <li>
                                <h2>Order Summery</h2>
                            </li>
                            <li>
                                <div className='row'>
                                    <div>Items</div>
                                    <div>Rs {cart.itemsPrice.toFixed(2)}/=</div>
                                </div>
                            </li>
                            <li>
                                <div className='row'>
                                    <div>Shipping</div>
                                    <div>Rs {cart.shippingPrice.toFixed(2)}/=</div>
                                </div>
                            </li>
                            <li>
                                <div className='row'>
                                    <div>Tax</div>
                                    <div>Rs {cart.taxPrice.toFixed(2)}/=</div>
                                </div>
                            </li>
                            <li>
                                <div className='row'>
                                    <div>Total </div>
                                    <div>Rs {cart.totalPrice.toFixed(2)}/=</div>
                                </div>
                            </li>
                            <li>
                                <button 
                                type='button' 
                                onClick={placeOrderHandler} 
                                className='primary block'
                                disabled={cart.cartItems.length===0}
                                >
                                    Place Order
                                </button>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}