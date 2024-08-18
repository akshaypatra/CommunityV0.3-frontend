import React, { useState } from 'react'
import { Link,useNavigate  } from 'react-router-dom'
import axios from 'axios';
export default function LoginPage(props) {

  const [post,setPost]=useState({
    username:" ",
    password:" "
  });

  const handleInput=(event)=>{
    setPost({...post,[event.target.name]: event.target.value});
  }

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/api/api-token-auth/', post)
      .then(response => {
        
        const { token } = response.data;
      
        localStorage.setItem('authToken', token);
        props.showAlert('Logged in successfully', 'success');
        // Redirect to home page
        navigate('/');
      })
      .catch(err => {
        const errorMessage = err.response && err.response.data && err.response.data.detail 
        ? err.response.data.detail 
        : 'Login failed. Please check your credentials.';
        props.showAlert(errorMessage, 'danger');
      });
  };


  const handleReset = () => {
    setPost({
      username:" ",
      password:" "
    });
  };

  return (
    <div className='LoginPage'>
        <div className='form-container '>
        <h4 className='header my-2'>Log In to College Community</h4>
            <form onSubmit={handleSubmit} >
                <div className='container my-5'>
                <input type="email" className="form-control" id="username" placeholder="Email address" name='username' onChange={handleInput} required></input>
                <input id='password' type='password' className='form-control my-2' placeholder='Password' name='password' onChange={handleInput} required></input>
                </div>

                <div>
                <button className='Signup-button' type='submit'>Submit</button>
                <button className='Login-button' onClick={handleReset}>Reset</button>
                </div>

                Don't have an account ?  <Link className='login-link'  to="/signup">SignUp</Link>
            </form>

        </div>
      
    </div>
  )
}
