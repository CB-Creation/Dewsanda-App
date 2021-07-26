import React from 'react';
import Rating from '../components/Rating';
import data from '../data';
import {Link} from 'react-router-dom';

 export default function ProductScreen(props){
     const product=data.products.find((x)=>x.id===props.match.params.id);
     if(!product){
         return<div>Product Not Found</div>
     }
     return(
     <div>
         <Link to='/'>Back To Home</Link>
         <div className="row top">
             <div className="col-2"></div>
             <img className="large" src={product.image} alt={product.name}/>

             <div className="col-1">
                 <ul>
                     <li><h1>{product.name}</h1></li>
                     <li><Rating rating={product.rating} numReviews={product.numReviews}/></li>
                    <li>Price : {product.price}</li>
                    <li>Description: {product.description}</li>
                 </ul>
             </div>
             <div className="col-1">
                 <div>
                     <div className="card card-body">
                         <ul>
                             <li>
                                 <div className='row'>
                                    Price
                                 </div>
                                 <div className='price'>
                                    ${product.price}
                                 </div>
                             </li>
                             <li>
                                 <div className='row'>
                                    Status
                                 </div>
                                 <div className='price'>
                                    {product.counterInStock>0?(<span className="success">In Stock:{product.counterInStock}</span>
                                    ):(
                                    <span className='danger'>Unavailable :{product.counterInStock}</span>
                                    )}
                                 </div>
                             </li>
                             <li>
                                 <button className='primary block'>
                                        Add to cart
                                 </button>
                             </li>
                         </ul>
                     </div>
                 </div>
             </div>
         </div>
     </div>
     );
 }