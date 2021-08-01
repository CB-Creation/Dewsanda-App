import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/userActions';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';

export default function SignInScreen(props){

    const dispatch = useDispatch();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const userSignin =useSelector(state=>state.userSignin)
    const {userInfo,loading,error}=userSignin;

    const redirect=props.location.search
    ? props.location.search.split('=')[1]
    :'/signin';
    
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(signin(email,password));

    }
    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect);
        }
    },[props.history, redirect, userInfo])
    return(
        <div>
            <form className='form' onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                    </div>
                    <div>
                        <label htmlFor='email'>Email address</label>
                        <input 
                        type='email' 
                        id='email' 
                        placeholder='Enter Your Email' 
                        required
                        onChange={e=>setEmail(e.target.value)}
                        ></input>
                </div>
                <div>
                        <label htmlFor='password'>Password</label>
                        <input 
                        type='password' 
                        id='password' 
                        placeholder='Enter Your Password' 
                        required
                        onChange={e=>setPassword(e.target.value)}
                        ></input>
                </div>
                <div>
                    <label>
                        <button 
                        className='primary'
                        type='submit'
                        >Sign In
                        </button>
                    </label>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant='danger'>{error}</MessageBox>}
                <div>
                    <label>
                        <div>
                            New customer? {' '}
                            <Link to={`/register?redirect=${redirect}`}>Create your account</Link>
                        </div>
                    </label>
                </div>
            </form>
        </div>
    )
}