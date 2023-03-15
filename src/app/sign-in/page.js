"use client";

import Link from 'next/link';
import React, { useState, useEffect} from 'react'

// import axios from 'axios';


const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
  
  
  
    return (
    //     <form onSubmit={handleSubmit}>
    //   <div className='signindiv'>
    //       <Link className='createlinks' to={'/'}>🔙Store</Link>
    //       {user ? (
    //       <div>
    //         <p>Welcome, {user.username}!</p>
    //         <p>Your address is {user.address}.</p>
    //       </div>
    //     ) : (
          <div>
          <h1 className='createhappy'>Sign in to your account</h1>
          <p className='signinarea'>Username</p>
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/><br/>
          <p className='signinarea'>Password</p>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} /><br/>
          <button  className='signinarea'  type="submit">Sign in</button>
          <p>Dont have an account with us?<Link className='createlinks' href={'/sign-up'}> 🔒Sign Up </Link></p>
       
      </div>
       
          
          
    //   </div>
     // )}
    //   </form>

  
    )
  }
  
  export default SignIn;