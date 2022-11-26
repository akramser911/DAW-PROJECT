import React from "react";
// import { Link } from "react-router-dom";
import './App.css'
import image from './loginpic.png'
import { FaUser } from 'react-icons/fa';
import { MdPassword } from "react-icons/md";
import { MdEmail } from "react-icons/md";

function Login() {
    return (
      <div>
       {/* <nav>
        <Link to='/Login' className='navText'>Login</Link>
        <Link to='/Registration' className='navText'>Registration</Link>
      </nav> */}
        <div className="App">
          <div className='left'>
            <img src={image} alt='Registration page ' className='loginPic' />
          </div>
          <div className='right'>
          <h1>Sign <span className='colored'>In</span></h1>
          <p>you already have an account ? <span><a href='./Login'>Log in</a></span></p>
         
          <form>
            <div className='name' >
              <label> <FaUser/> Name</label>
              <br></br>
              <input type='text' placeholder='your name'></input>
            </div>
            <div className='email' >
              <label> <MdEmail/> Email</label>
              <br></br>
              <input type='email' placeholder='example@gmail.com'></input>
            </div>
            <div className='password'>
              <label><MdPassword/> Password</label>
              <br></br>
              <input type='password' placeholder='******'></input>
            </div>
            <a href="/Login">SIGNIN</a>
            {/* <input type='submit' value='SIGN IN' className='createBtn'></input> */}
          </form>
          </div>
    
        </div>
        </div>
      );
  }
  
  export default Login;
  