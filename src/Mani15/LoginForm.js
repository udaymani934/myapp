import React,{useState,useEffect} from 'react';
import  axios from 'axios';
import {useNavigate } from 'react-router-dom';
import './LoginForm.css'
import ABCD from './ABCD'
 function LoginForm() {
  let navigate = useNavigate();
   const [data,setData]=useState({
    name:'',
    email:'',
    password:'',
    mobileNum:'',
    username:''
   })
   const {name,email,password,mobileNum,username}=data;
   const changeHandler =e =>{
    setData({...data,[e.target.name]:e.target.value})
   }
   const submitHandler = e=>{
    e.preventDefault(); 
    axios.post('https://ixonotest.herokuapp.com/api/User/submit-profile',data)
    .then(  (response)=>{
      // history.replace("/").
      navigate("/ABCD");
        
    }).catch((error)=>{
      console.log(error);
    })
    console.log(data);
   }
  return (
    <div className='formbody'>
      <form onSubmit={submitHandler}>
        <div>
        <h1 className='heading'>Submit Profile</h1>
        </div><br />
        <div className='b1'>
        <span>Name</span>
        <input type='text' name='name' value={name} onChange={changeHandler} className="ib1"/>
        </div>
        <br/>
        <div  className='b2'>
        <span>Email</span>
        <input type='email' name='email'value={email} onChange={changeHandler} className="ib2"/>
        </div>
        <br/>
        <div  className='b3'>
        <span>Password</span>
        <input type='password' name='password' value={password} onChange={changeHandler} className="ib3"/>
        </div>
        <br/>
        <div  className='b4'>
        <span>MobileNumber</span>
        <input type='number' name='mobileNum' value={mobileNum  } onChange={changeHandler} className="ib4"/>
        </div>
        <br/>
        <div  className='b5'>
        <span>Username</span>
        <input type='username' name='username' value={username} onChange={changeHandler} className="ib5"/>
        </div>
        <br/>
        <button className='button'>Submit</button>
      </form>
    </div>
  )
}
export default LoginForm;