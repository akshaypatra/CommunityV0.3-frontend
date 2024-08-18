
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