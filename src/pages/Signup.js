import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate  } from 'react-router-dom'


export default function Signup(props) {

  const [post,setPost]=useState({

    first_name:"",
    last_name:"",
    college_name:"",
    state:"",
    city:"",
    enrollment_number:"",
    department:"",
    academic_year:"",
    email:"",
    password:"",

  })


  const navigate = useNavigate();

  const handleInput=(event)=>{
      setPost({...post,[event.target.name]: event.target.value});
      
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Register the user
    axios.post('http://127.0.0.1:8000/api/register/', post)
      .then(response => {
        // Automatically log the user in after successful registration
        const loginData = {
          username: post.email,
          password: post.password
        };

        axios.post('http://127.0.0.1:8000/api/api-token-auth/', loginData)
          .then(response => {
            const { token } = response.data;
            localStorage.setItem('authToken', token);
            props.showAlert('Signed in successfully', 'success');
            navigate('/');
          })
          .catch(err => {
            const errorMessage = err.response && err.response.data && err.response.data.detail
              ? err.response.data.detail
              : 'Login failed. Please check your credentials.';
            props.showAlert(errorMessage, 'danger');
          });
      })
      .catch(err => {
        let errorMessage = 'Signup failed. Please check your input and try again.';

      // Check if response data contains detailed error messages
      if (err.response && err.response.data) {
        const errors = err.response.data;
        // Combine error messages into a single string
        errorMessage = Object.keys(errors).map(key => {
          if (Array.isArray(errors[key])) {
            return `${key}: ${errors[key].join(', ')}`;
          }
          return `${key}: ${errors[key]}`;
        }).join(', ');
      }

      props.showAlert(errorMessage, 'danger');
      });
  }

  const handleReset = () => {
    setPost({
      first_name: "",
      last_name: "",
      college_name: "",
      state: "",
      city: "",
      enrollment_number: "",
      department: "",
      academic_year: "",
      email: "",
      password: "",
      confirm_password: ""
    });
  };

  return (
    <div className='signupPage'>
        <h2 className='my-3'>Welcome to College Community</h2><br/>
        
        <div className='form-container'>
        <h4 className='header my-2'>Enter your details to create an account</h4>
            <form onSubmit={handleSubmit} >
                <div className='container my-5'>
                
                <input id='first_name' className='form-control my-2' onChange={handleInput} placeholder='First Name' name='first_name'  required/>
                
                <input id='last_name' className='form-control my-2' onChange={handleInput} placeholder='Last Name' name='last_name'  required></input>
                <input id='college_name' className='form-control my-2' onChange={handleInput} placeholder='College Name' name='college_name'  required></input>
                <input id='state' className='form-control my-2' onChange={handleInput} placeholder='State'  name='state'  required></input>
                <input id='city' className='form-control my-2' onChange={handleInput} placeholder='City' name='city'  required></input>
                <input id='enrollment_number' className='form-control my-2' onChange={handleInput} placeholder='Enrollment Number'   name='enrollment_number' required ></input>
                <select id='department' className="form-select" onChange={handleInput} aria-label="Default select example" value={post.department} name='department' required>
                        <option value="">Select Department</option>
                        <option value="Btech CSE core">Btech CSE core</option>
                        <option value="Btech IT">Btech IT</option>
                        <option value="Btech Artificial Intelligence ">Btech Artificial Intelligence </option>
                        <option value="Btech Cloud Computing">Btech Cloud Computing </option>
                        <option value="Btech AI/ML">Btech AI/ML </option>
                        <option value="Btech Blockchain">Btech Blockchain </option>
                        <option value="Btech Cyber Security">Btech Cyber Security </option>
                </select>
                <select id='academic_year' className="form-select my-2" onChange={handleInput} aria-label="Default select example"  name='academic_year' value={post.academic_year} required>
                        <option value="">Academic Year</option>
                        <option value="1">First year</option>
                        <option value="2">Second year</option>
                        <option value="3">Third year </option>
                        <option value="4">Final year </option>
                        
                </select>
                <input type="email" className="form-control" id="email" onChange={handleInput} placeholder="Email address"  name="email"  required></input>
                <input id='password' type='password' className='form-control my-2' onChange={handleInput} placeholder='Set Password'  name='password'   required></input>
            
                </div>

                <div>
                <button className='Signup-button' type='submit'>Create Account</button>
                <button className='Login-button' type='button' onClick={handleReset}>Reset</button>
                </div>

                Already have an account ? <Link className='login-link'  to="/login"  >Login</Link>
            </form>

        </div>
      
    </div>
  )
}


// registration endpoint : http://127.0.0.1:8000/api/register/