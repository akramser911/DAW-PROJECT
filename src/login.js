import './App.css'
import image from './loginpic.png'
// import { Link } from 'react-router-dom';

function Login() {
    return (
      <div>
      {/* <nav>
        <Link to='/Login' className='navText'>Login</Link>
        <Link to='/Registration' className='navText'>Registration</Link>
      </nav> */}
        <div className="App">
          <div className='left'>
            <img src={image} alt='login page ' className='loginPic' />
          </div>
          <div className='right'>
          <h1>Log <span className='colored'>In</span></h1>
          <p>you don't have an account yet ? <span><a href='./Registration'>sign in</a></span></p>
         
          <form>
            <div className='name' >
              <label>Name</label>
              <br></br>
              <input type='text' placeholder='your name'></input>
            </div>
            <div className='password'>
              <label>Password</label>
              <br></br>
              <input type='password' placeholder='******'></input>
            </div>
            <a href='/Admin'>LOGIN</a>
          </form>
          </div>
    
        </div>
        </div>
      );
  }
  
  export default Login;
  

