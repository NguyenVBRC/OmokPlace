import React, { useState } from 'react';
import { Link } from "react-router-dom";
import CreateAcc from '../CreateAcc/CreateAcc';
import "../SignIn.css"

export default function SignIn() {

  const [ userDetails, setUserDetails ] = useState({
    username: "",
    password: ""
  })

  const fakeDB = {
    username: "cadena",
    password: "tooHard"
  }

  function compareCredentials(e){
    setUserDetails({
      ...userDetails, 
      [e.target.id]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    if (userDetails.username === fakeDB.username && userDetails.password === fakeDB.password) {
      console.log("Login Successful")
    } else {
      console.log("Login Failed")
    }
    console.log(userDetails)
  }

  return (
    <form className="log__container" style={{justifyContent: "space-evenly", width: "20rem", height:"20rem"}}>
            <input 
                type="text" placeholder='Username' name="username" className='sign__in'
                id='username'
                onChange={e => compareCredentials(e)}
            />
            <input 
                type="password" placeholder='Password' name="password" className='sign__in'
                id='password'
                onChange={e => compareCredentials(e)}
            />
            <button 
              type='submit' 
              id='sign__in__btn' 
              onClick={handleSubmit}
            >
              Log In
            </button>
            <hr></hr>
            <Link to="/CreateAccount" id='create__acc'>
                Create New Account
            </Link>
    </form>
  )
}
