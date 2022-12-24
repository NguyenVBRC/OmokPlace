import React, { useState } from 'react'
import "./SignIn.css"

export default function SignIn() {


  return (
    <main className="log__container" style={{justifyContent: "space-evenly", width: "20rem", height:"20rem"}}>

            <input 
                type="text" placeholder='Username' name="username" className='sign__in'
            />

            <input 
                type="password" placeholder='Password' name="password" className='sign__in'
            />

            <button type='submit' id='sign__in__btn'>Log In</button>
            <hr></hr>
            <button id='create__acc'>Create New Account</button>
    </main>
  )
}
