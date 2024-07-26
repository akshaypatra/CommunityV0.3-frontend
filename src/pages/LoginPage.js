import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div className='LoginPage'>
        <div className='form-container '>
        <h4 className='header my-2'>Log In to College Community</h4>
            <form >
                <div className='container my-5'>
                
                
                
                
                
                
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email address" required></input>
                <input id='password' type='password' className='form-control my-2' placeholder='Password' required></input>
                </div>

                <div>
                <button className='Signup-button'>Submit</button>
                <button className='Login-button'>Reset</button>
                </div>

                Don't have an account ?  <Link className='login-link'  to="/signup">SignUp</Link>
            </form>

        </div>
      
    </div>
  )
}
