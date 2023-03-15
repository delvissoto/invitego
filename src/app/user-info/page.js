"use client";
import React, { useState } from 'react'

const UserInfo = () => {
const [firstname, setFirstname]= useState('');
const [lastname, setLastname]=useState('');
const [username, setUsername] = useState('');
const [password, setPassword]= useState('');



  return (
  <div>

    <form>
        <h2>Update Info</h2>
        <input className='UserInfoInput' type="text" placeholder='first name' value={firstname} onChange={(e) => setFirstname(e.target.value)}/><br/>
        <input className='UserInfoInput' type="text" placeholder='last name' value={lastname} onChange={(e) => setLastname(e.target.value)}/><br/>
        <input className='UserInfoInput' type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/><br/>
        <input className='UserInfoInput' type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
        <input className='UserInfoInput' type="password" placeholder='re-enter password' /><br/>
    </form>
  </div>
  )
}

export default UserInfo