import React from 'react'
import './settings.css'
import {useState} from 'react'

const Settings = () => {
  const [profile, setProfile]=useState('https://raw.githubusercontent.com/OlgaKoplik/CodePen/master/profile.jpg')

  const photoUploadHandle = e => {

    e.preventDefault()
    const reader = new FileReader();
    const file = e.target.files[0];
    // console.log(file, "======file=====")
    setProfile(reader.result)


  }
  return (

      <div className='accommodation'>
        <div className="content">
          <div className="accomHeader">
            <h2>Settings</h2>
            <ul class="breadcrumb">
              <li><a href="#">Home</a></li>
              <li><a href="#">Settings</a></li>
            </ul>
          </div>
          <div className="profileDetails">
            <div className="profile">
              <div className="profilePicture">
                <label htmlFor="photo-upload" className="custom-file-upload fas">
                <div className="img-wrap img-upload" >
                  <img for="photo-upload"  src={profile}/>
                </div>
                <input id="photo-upload" onChange={photoUploadHandle} type="file" /> 
                </label>
              </div>
              <div className="userDetails">
                <form action="">
                  <fieldset>
                    <legend>First name</legend>
                    <input type="text" placeholder='Enter first name' />
                  </fieldset>
                  <fieldset>
                    <legend>Last name</legend>
                    <input type="text" placeholder='Enter last name' />
                  </fieldset>
                  <fieldset>
                    <legend>Username</legend>
                    <input type="text" placeholder='Enter Username'/>
                  </fieldset>
                  <fieldset>
                    <legend>Email</legend>
                    <input type="email" placeholder='Enter Email' />
                  </fieldset>
                  <fieldset>
                    <legend>Phone Number</legend>
                    <input type="email" placeholder='Enter Phone number' />
                  </fieldset>
                  <button className='btn'>Save</button>
                </form>
              </div>
            </div>
            <div className="passwordChange">
              <h2>Change Password</h2>
              <form action="">
                <fieldset>
                    <legend>Old password</legend>
                    <input type="password" placeholder='Enter old password' />
                </fieldset>
                <fieldset>
                    <legend>New password</legend>
                    <input type="password" placeholder='Enter new password' />
                </fieldset>
                <button className='btn'>Change</button>
              </form>
            </div>
          </div>
            
        </div>
      </div>
  )
}

export default Settings