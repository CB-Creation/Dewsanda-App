import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';

export default function RegisterScreen(props){

    const dispatch = useDispatch();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const userRegister =useSelector(state=>state.userRegister)
    const {userInfo,loading,error}=userRegister;

    const redirect=props.location.search
    ? props.location.search.split('=')[1]
    :'/';
    
    const submitHandler=(e)=>{
        e.preventDefault();
        if(password!==confirmPassword){
            alert('Password and Confirm password are not match')
        } else{
        dispatch(register(name,email,password));
        }
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
                    <h1>Register</h1>
                    </div>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input 
                        type='text' 
                        id='name' 
                        placeholder='Enter Your Name' 
                        required
                        onChange={e=>setName(e.target.value)}
                        ></input>
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
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <input 
                        type='password' 
                        id='confirmPassword' 
                        placeholder='Confirm Your Password' 
                        required
                        onChange={e=>setConfirmPassword(e.target.value)}
                        ></input>
                </div>
                <div>
                    <label>
                        <button 
                        className='primary'
                        type='submit'
                        >Create Your Account
                        </button>
                    </label>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant='danger'>{error}</MessageBox>}
                <div>
                    <label>
                        <div>
                            Already have a account? {' '}
                            <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
                        </div>
                    </label>
                </div>
            </form>
        </div>
    )
}