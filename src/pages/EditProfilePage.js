import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EditProfilePage() {
  const token = localStorage.getItem('authToken');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [department, setDepartment] = useState('');
  const [academicYear, setAcademicYear] = useState('');
  // const [password, setPassword] = useState('');
  



  // const [profilePicture, setProfilePicture] = useState(null);
  const [bio, setBio] = useState('');
  const [skills, setSkills] = useState('');
  const [work, setWork] = useState('');
  


 

  useEffect(() => {
    // Fetch profile info data on component mount
    axios.get('http://127.0.0.1:8000/api/profileinfo/', {
      headers: {
        'Authorization': `Token ${token}`,
      },
    })
    .then(response => {
      const data = response.data;
      // setProfilePicture(data.profile_picture || ''); // Set default URL if needed
      setBio(data.bio || '');
      setSkills(data.skills || '');
      setWork(data.work || '');
    })
    .catch(error => {
      console.error('Error fetching profile info:', error);
    });


    axios.get('http://127.0.0.1:8000/api/profile/', {
      headers: {
        'Authorization': `Token ${token}`,
      },
    })
    .then(response => {
      const data = response.data;
      
      setFirstName(data.first_name || '');
      setLastName(data.last_name || '');
      setEnrollmentNumber(data.enrollment_number || '');
      setState(data.state || '');
      setCity(data.city || '');
      setCollegeName(data.college_name || '');
      setDepartment(data.department || '');
      setAcademicYear(data.academic_year || '');
    })
    .catch(error => {
      console.error('Error fetching profile info:', error);
    });


  }, [token]);

  const handleFileChange = (e) => {
  //   setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    // if (profilePicture) {
    //   formData.append('profile_picture', profilePicture);
    // }

    formData.append('bio', bio);
    formData.append('skills', skills);
    formData.append('work', work);
    
    
    try {
      const response = await axios.put('http://127.0.0.1:8000/api/profileinfo/update/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Token ${token}`,
        },
      });
      console.log('Profile updated successfully', response.data);
    } catch (error) {
      console.error('Error updating profile and user details', error.response ? error.response.data : error.message);
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('college_name', collegeName);
    formData.append('department', department);
    formData.append('academic_year', academicYear);
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('state', state);
    formData.append('city', city);
    formData.append('enrollment_number ',enrollmentNumber);
  //   if (password){
  //   formData.append('password', password );
  // }

    try {
      const response = await axios.patch('http://127.0.0.1:8000/api/update-user/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Token ${token}`,
        },
      });
      console.log('Profile updated successfully', response.data);
    } catch (error) {
      console.error('Error updating profile and user details', error.response ? error.response.data : error.message);
    }



  };

  return (
    <div className='edit-profile-page'>
        
        <form  className='edit-profile-section2' onSubmit={handleSubmit2}>
            <h1>User Details</h1>
            <label htmlFor="first-name">First Name:</label>
            <input type='text' id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <br />

            <label htmlFor="last-name">Last Name:</label>
            <input type='text' id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <br />

            <label htmlFor="college-name">College Name:</label>
            <input type='text' id="college-name" value={collegeName} onChange={(e) => setCollegeName(e.target.value)} />
            <br />

            <label htmlFor="enrollment-number ">Enrollment Number :</label>
            <input type='text' id="enrollment_number " value={enrollmentNumber } onChange={(e) => setEnrollmentNumber(e.target.value)} />
            <br />


            <label htmlFor="state">State:</label>
            <input type='text' id="state" value={state} onChange={(e) => setState(e.target.value)} />
            <br />

            <label htmlFor="city">City:</label>
            <input type='text' id="city" value={city} onChange={(e) => setCity(e.target.value)} />
            <br />

            <label htmlFor="department-name">Department:</label>
            <input type='text' id="department-name" value={department} onChange={(e) => setDepartment(e.target.value)} />
            <br />
            <label htmlFor="academic-year">Academic Year:</label>
            <input type='text' id="academic-year" value={academicYear} onChange={(e) => setAcademicYear(e.target.value)} />
            <br />
            {/* <label htmlFor="password">Enter password to save changes:</label>
            <input type='password' id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br /> */}

            <button type='submit'>Save Changes</button>
       </form>

       <form className='edit-profile-section1' onSubmit={handleSubmit}>
            <h1>Additional info</h1>
            <label htmlFor="imageUpload">Upload Profile Picture:</label>
            <input type="file" id="imageUpload" name="profile_picture" accept="image/*" onChange={handleFileChange} />
            <br />
            
            <label htmlFor="bio">Bio:</label>
            <textarea id="bio" maxLength="1000" placeholder='Enter your description' value={bio} onChange={(e) => setBio(e.target.value)} />
            <br />
            <label htmlFor="skills">Skills:</label>
            <textarea id="skills" maxLength="1000" value={skills} onChange={(e) => setSkills(e.target.value)} placeholder='Mention your Skills' />
            <br />
            <label htmlFor="work">Work:</label>
            <textarea id="work" maxLength="1000" value={work} onChange={(e) => setWork(e.target.value)} placeholder='Describe your Projects/Work' />
            <button type='submit'>Save Changes</button>
       </form>
       
    </div>
  );
}
