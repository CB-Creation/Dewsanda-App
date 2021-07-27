import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import {detailsProduct} from '../actions/productActions'
import Rating from '../components/Rating';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';



export default function ProductScreen(props) {
     const dispatch = useDispatch();
     const productId=props.match.params.id;
     const productDetails = useSelector((state)=>state.productDetails);
     const {loading,error,product}=productDetails;

    useEffect(()=>{
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);
     
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
  )
        }
     </div>
     );
}
