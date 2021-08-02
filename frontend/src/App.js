import React from 'react';
import { useSelector,useDispatch } from 'react-redux';

import {BrowserRouter, Link, Route} from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/profileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignInScreen from './screens/SignInScreen';

function App() {
    const cart=useSelector(state=>state.cart);
    const {cartItems} = cart;
    const userSignin =useSelector(state=>state.userSignin);
    const {userInfo} =userSignin;
    const dispatch=useDispatch();
    const signoutHandler=()=>{
        dispatch(signout());
    }
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
        <div>
            <Link className="brand" to="/">Dewsanda Natural Product
            </Link>
        </div>
        <div>
            <Link to="/cart">Cart{
                cartItems.length>0 &&(
                    <span className="badge">{cartItems.length}</span>
                )
            }</Link>
        {
            userInfo
            ? (
            <div className='dropdown'>{userInfo.name!==undefined?
            <>
          
            <Link to='#signout' onClick={signoutHandler}>
            Sign Out
            </Link></>:<><Link to="/signin">Sign In</Link></>}
            <Link to="#">{userInfo.name}</Link>
            <ul className='dropdown-content'>
                
            </ul>
            </div>
            ):(
             <><Link to="/signin">Sign In</Link></>    
           )
        }
            </div>
    </header>
    <main>
    <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
    <Route path="/placeorder" component={PlaceOrderScreen}></Route>
    <Route path="/payment" component={PaymentMethodScreen}></Route>
    <Route path="/register" component={RegisterScreen}></Route>
    <Route path="/shipping" component={ShippingAddressScreen}></Route>
    <Route path="/signin" component={SignInScreen}></Route>
      <Route path="/cart/:id?" component={CartScreen}></Route>
      <Route path="/" component={HomeScreen} exact></Route>
      <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path="/profile" component={ProfileScreen}></Route>
      
    </main>
    <footer className="row center">
        All right reserved
    </footer>
</div>
</BrowserRouter>);
}

export default App;
