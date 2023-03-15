"use client";

import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';





function SignUp() {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword]= useState('');
  const [rePassword, setRePassword]= useState('');
  const [email, setEmail] = useState('');
  
  

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = {
//       fName: fName,
//       lName: lName,
//       username: username,
//       password:password,
//       email: email
//      
//     };
//     axios.post('/api/users/addUsers', formData)
//       .then(response => {
//         console.log('User created:', response.data);
//         // handle success response here
//       })
//       .catch(error => {
        
//         console.error('Error creating user:', error);
//         // handle error response here
//       });
      
        
         
      
  

  return (
    <div className='createactdiv'>
      <div className='formcreate'>
    {/* <form  onSubmit={handleSubmit}> */}
      
    <Link className='createlinks' href={'/'}>🔙Store</Link>

      <h1 className='createhappy'> Create Acount</h1>

        <div>
        <input className='inputcreateact clear' type="text" placeholder='First name' value={fName} onChange={(e) => setFName(e.target.value)} />
        </div>

       <div>
        <input className='inputcreateact clear' type="text" placeholder='Last name' value={lName} onChange={(e) => setLName(e.target.value)} />
        </div>

        <div>
        <input className='inputcreateact clear' type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value) } />
        </div>
      
        <div>
        <input className='inputcreateact clear' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        
        <div>
        <input className='inputcreateact clear' type="password" placeholder='Re-enter password' value={rePassword} onChange={(e) => setRePassword(e.target.value)} />
        </div>

        <div>
        <input className='inputcreateact clear' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      
     
       
      
      <button className='inputcreateact' type="submit">Create User</button>
      <p>Already have a Account? <Link className='createlinks' href='/sign-in'>🔒Log in</Link></p>
     
    {/* </form> */}
    
    </div>
   
     </div>
  
  );
}
export default SignUp;