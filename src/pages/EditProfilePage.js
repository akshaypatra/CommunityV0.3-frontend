import React from 'react'
import  { useState } from 'react';
import axios from 'axios';

export default function EditProfilePage() {
  const token = localStorage.getItem('authToken');

  const [profilePicture, setProfilePicture] = useState(null);
  const [bio, setBio] = useState('');
  const [skills, setSkills] = useState('');
  const [work, setWork] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [department, setDepartment] = useState('');
  const [academicYear, setAcademicYear] = useState('');

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('profile_picture', profilePicture);
    formData.append('bio', bio);
    formData.append('skills', skills);
    formData.append('work', work);
    // console.log('Authorization token:', token); 
    try {
      await axios.put('http://127.0.0.1:8000/api/profileinfo/update/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Token ${token}`,
        },
      });

      
      await axios.put('http://127.0.0.1:8000/api/profileinfo/update-user-details/', {
        college_name: collegeName,
        department: department,
        academic_year: academicYear,
      }, {
        headers: {
          'Authorization': `Token ${token}`,
        },
      });

      console.log('Profile and user details updated successfully');
    } catch (error) {
      console.error('Error updating profile and user details', error);
    }
  };



  return (
    <div className='edit-profile-page'>
       <form className='edit-profile-section1'  onSubmit={handleSubmit}>
            <label for="imageUpload">Upload Profile Picture :  </label>
            <input type="file" id="imageUpload" name="image" accept="image/*"  onChange={handleFileChange}></input>
            <br>
            </br>
            <label for="college-name">College Name :</label>
            <input type='text' id="college-name" value={collegeName}
          onChange={(e) => setCollegeName(e.target.value)} ></input>
            <br>
            </br>
            <label for="department-name">Department :</label>
            <input type='text' id="department-name" value={department}
          onChange={(e) => setDepartment(e.target.value)} ></input>
            <br>
            </br>
            <label for="academic-year">Academic Year :</label>
            <input type='text' id="academic-year" value={academicYear}
          onChange={(e) => setAcademicYear(e.target.value)}></input>
            <br>
            </br>
            <label for="bio">Bio :</label>
            <textarea type='text' id="Bio" maxLength="1000" placeholder='Enter your description' value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
            <br></br>
            <label for="skills">Skills :</label>
            <textarea type='text' id="skills" maxLength="1000" value={skills} onChange={(e) => setSkills(e.target.value)} placeholder='Mention  your Skills'></textarea>
            <br></br>
            <label for="work">Work :</label>
            <textarea type='text' id="work" maxLength="1000" value={work} onChange={(e) => setWork(e.target.value)} placeholder='Describe your Projects/Work'></textarea>
            <button type='submit'>Save Changes</button>
       </form>
       
    </div>
  )
}
