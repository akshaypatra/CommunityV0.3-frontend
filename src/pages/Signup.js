import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='signupPage'>
        <h2 className='my-3'>Welcome to College Community</h2><br/>
        
        <div className='form-container'>
        <h4 className='header my-2'>Enter your details to create an account</h4>
            <form >
                <div className='container my-5'>
                
                <input id='firstname' className='form-control my-2' placeholder='First Name' required/>
                
                <input id='lastname' className='form-control my-2' placeholder='Last Name' required></input>
                <input id='CollegeName' className='form-control my-2' placeholder='College Name' required></input>
                <input id='State' className='form-control my-2' placeholder='State' required></input>
                <input id='City' className='form-control my-2' placeholder='City' required></input>
                <input id='enrollmentNumber' className='form-control my-2' placeholder='Enrollment Number' required ></input>
                <select class="form-select" aria-label="Default select example" required>
                        <option selected>Select Department</option>
                        <option value="1">Btech CSE core</option>
                        <option value="2">Btech IT</option>
                        <option value="3">Btech Artificial Intelligence </option>
                        <option value="4">Btech Cloud Computing </option>
                        <option value="5">Btech AI/ML </option>
                        <option value="6">Btech Blockchain </option>
                        <option value="7">Btech Cyber Security </option>
                </select>
                <select class="form-select my-2" aria-label="Default select example" required>
                        <option selected>Academic Year</option>
                        <option value="1">First year</option>
                        <option value="2">Second year</option>
                        <option value="3">Third year </option>
                        <option value="4">Final year </option>
                        
                </select>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email address" required></input>
                <input id='password' type='password' className='form-control my-2' placeholder='Set Password' required></input>
                <input id='Confirmpassword' type='password' className='form-control my-2' placeholder='Confirm Password' required ></input>
                </div>

                <div>
                <button className='Signup-button'>Create Account</button>
                <button className='Login-button'>Reset</button>
                </div>

                Already have an account ? <Link className='login-link'  to="/login"  >Login</Link>
            </form>

        </div>
      
    </div>
  )
}
