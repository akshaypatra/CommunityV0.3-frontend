import React from 'react'

export default function EditProfilePage() {
  return (
    <div className='edit-profile-page'>
       <section className='edit-profile-section1'>
            <label for="imageUpload">Upload Profile Picture :  </label>
            <input type="file" id="imageUpload" name="image" accept="image/*"></input>
            <br>
            </br>
            <label for="college-name">College Name :</label>
            <input type='text' id="college-name" ></input>
            <br>
            </br>
            <label for="department-name">Department :</label>
            <input type='text' id="department-name" ></input>
            <br>
            </br>
            <label for="academic-year">Academic Year :</label>
            <input type='text' id="academic-year"></input>
            <br>
            </br>
            <label for="bio">Bio :</label>
            <textarea type='text' id="Bio" maxlength="1000" placeholder='Enter your description'></textarea>
            <br></br>
            <label for="skills">Skills :</label>
            <textarea type='text' id="skills" maxlength="1000" placeholder='Mention  your Skills'></textarea>
            <br></br>
            <label for="work">Work :</label>
            <textarea type='text' id="work" maxlength="1000" placeholder='Describe your Projects/Work'></textarea>
            <button type='submit'>Save Changes</button>
       </section>
       
    </div>
  )
}
