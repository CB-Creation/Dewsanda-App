import React,{useEffect,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import {detailsProduct} from '../actions/productActions'
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';



export default function ProductScreen(props) {
     const dispatch = useDispatch();
     const productId=props.match.params.id;
     const [qty, setQty]=useState(1);
     const productDetails = useSelector((state)=>state.productDetails);
     const {loading,error,product}=productDetails;

    useEffect(()=>{
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);
     
    const addToCartHandler=()=>{
        props.history.push(`/cart/${productId}?qty=${qty}`);
    };
     return(
        <div>
        {loading ? (<LoadingBox></LoadingBox>
        ):
        error ? (<MessageBox variant='danger'>{error}</MessageBox>)
        :  (
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
                                {
                                    product.counterInStock> 0 && (
                                        <>
                                <li>
                                    <div className='row'>
                                        <div>Qty</div>
                                        <div>
                                            <select value={qty} 
                                            onChange=
                                            {e=>setQty(e.target.value)}
                                                >
                                        {
                                            [...Array(product.counterInStock).keys()].map(
                                                x=>(<option key={x+1} value={x+1}>{x+1}</option>)
                                            )   
                                        }                                            </select>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button onClick={addToCartHandler} className='primary block'>
                                           Add to cart
                                    </button>
                                </li>
                                </>
                                    )
                                }
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
  )
        }
     </div>
     );
}
