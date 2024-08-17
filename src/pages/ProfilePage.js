// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// export default function ProfilePage() {
//     const navigate=useNavigate();
//     const handleEditProfileButton=()=>{
//         navigate('edit_profile')
//     }

//   return (
//     <div className='Profile-container'>
       
//        <div className='profile-div'>
//             <div className="profile-card">
//             {/* eslint-disable-next-line */}
//             <img src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=" alt='add photo'  />
//             <h1>Akshay Patra</h1>
//             <p className="profile-title">Third Year CSE-CORE</p>
//             <p>MIT ADT University</p>
            
//             <p><button className='profile-button'>Contact</button></p>

//             </div>
//        </div>
//        <div className='details'>
//         <h3>Hi, I am a Web developer currently pursuing my Btech degree in Computer Science and Engineering.</h3>
//         <hr/>
//         <h4>Knows About</h4>
//         <ul>
//             <li>Full stack web development </li>
//             <li>React ecosystem</li>
//             <li>Django framework</li>
//             <li>Bootstrap</li>
//             <li>MySQL ,MongoDB</li>
//         </ul>
//         <hr/>
//         <h4>My Work</h4>
//         <ul>
//             <li><u>College Community</u> : A full stack web application made for the college to form a community.<br></br> 
//                 Tech used: React.js ,Node.js, MongoDB ,Bootstrap ,Next.js
//             </li>


//             <li className='my-2'><u>NoteFusion</u> : A CRUD application where user can create ,read,update and delete there notes .<br></br> 
//                 Uses Authentication for user data security.<br></br>
//                 Tech used: React.js ,Node.js, MongoDB ,Bootstrap ,Next.js
//             </li>
//         </ul>
//         <button onClick={handleEditProfileButton} className='details-edit-button'  >Edit Profile</button>
//         </div>
//     </div>
//   )
// }



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
    
    const [userData, setUserData] = useState(null);
    const [profileInfo, setProfileInfo] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        // Fetch user data
        const token = localStorage.getItem('authToken');
        if (!token) {
            console.error('No token found, redirecting to login');
            navigate('/login');
            return;
        }

        fetch('http://127.0.0.1:8000/api/profile/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`, 
            },
        })
        .then(response => response.json())
        .then(data => setUserData(data))
        .catch(error => console.error('Error fetching user data:', error));

        // Fetch profile info data
        fetch('http://127.0.0.1:8000/api/profileinfo/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            },
        })
        .then(response => response.json())
        .then(data => setProfileInfo(data))
        .catch(error => console.error('Error fetching profile info:', error));
    }, [navigate]);

    const handleEditProfileButton = () => {
        navigate('edit_profile');
    };

    if (!userData || !profileInfo) {
        return <div className='loading-screen'>Loading...<hr></hr>
            <button onClick={handleEditProfileButton} className='details-edit-button'>Edit Profile</button>
        </div>;
    }

    return (
        <div className='Profile-container'>
            <div className='profile-div'>
                <div className='profile-card'>
                    <img 
                        src={ "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="} 
                        alt='Profile'
                    />
                    <h1>{userData.first_name} {userData.last_name}</h1>
                    <p className='profile-title'>{userData.academic_year} {userData.department}</p>
                    <p>{userData.college_name}</p>
                    <p><button className='profile-button'>Contact</button></p>
                </div>
            </div>
            <div className='details'>
                <h3>{profileInfo.bio}</h3>
                <hr />
                <h4>Knows About</h4>
                <ul>
                    {profileInfo.skills}
                </ul>
                <hr />
                <h4>My Work</h4>
                <ul>
                    {profileInfo.work}
                </ul>
                <button onClick={handleEditProfileButton} className='details-edit-button'>Edit Profile</button>
            </div>
        </div>
    );
}