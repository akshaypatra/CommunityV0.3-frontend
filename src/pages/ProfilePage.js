import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function ProfilePage() {
    const navigate=useNavigate();
    const handleEditProfileButton=()=>{
        navigate('edit_profile')
    }

  return (
    <div className='Profile-container'>
       
       <div className='profile-div'>
            <div class="profile-card">
            {/* eslint-disable-next-line */}
            <img src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=" alt='add photo'  />
            <h1>Akshay Patra</h1>
            <p class="profile-title">Third Year CSE-CORE</p>
            <p>MIT ADT University</p>
            
            <p><button className='profile-button'>Contact</button></p>

            </div>
       </div>
       <div className='details'>
        <h3>Hi, I am a Web developer currently pursuing my Btech degree in Computer Science and Engineering.</h3>
        <hr/>
        <h4>Knows About</h4>
        <ul>
            <li>Full stack web development </li>
            <li>React ecosystem</li>
            <li>Django framework</li>
            <li>Bootstrap</li>
            <li>MySQL ,MongoDB</li>
        </ul>
        <hr/>
        <h4>My Work</h4>
        <ul>
            <li><u>College Community</u> : A full stack web application made for the college to form a community.<br></br> 
                Tech used: React.js ,Node.js, MongoDB ,Bootstrap ,Next.js
            </li>


            <li className='my-2'><u>NoteFusion</u> : A CRUD application where user can create ,read,update and delete there notes .<br></br> 
                Uses Authentication for user data security.<br></br>
                Tech used: React.js ,Node.js, MongoDB ,Bootstrap ,Next.js
            </li>
        </ul>
        <button onClick={handleEditProfileButton} className='details-edit-button'  >Edit Profile</button>
        </div>
    </div>
  )
}
