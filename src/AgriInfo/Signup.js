import React, { useState } from 'react'
import "./Login.css"
import {Link,  useNavigate} from 'react-router-dom'

function Signup() {
  const Navigate=useNavigate()
  const[firstname,setfirstname]=useState('');
  const[lastname,setlastname]=useState('');
  const[email,setemail]=useState('');
  const[phoneno,setphoneno]=useState('');
  const[username,setusername]=useState('');
  const[password,setpassword]=useState('');
  
  const sendtodb=(e)=>{
    e.preventDefault()
    const signup={firstname,lastname,email,phoneno,username,password}
    if(firstname.length===0||lastname.length===0||email.length===0||phoneno.length===0||username.length===0||password.length===0){
      alert("Enter All fields")
    }
    else{
    fetch("http://localhost:8080/signup/postsign",
    {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(signup)
    }
    ).then(()=>{
      console.log("New Detail Added");   
      console.log(JSON.stringify(signup));
      console.log(e);
      Navigate("/login")
      
    })
  }
}
  return (
    <div id="body">
    <div className='form'>
    <div className='box'>
    <div className='header'>
    <h1>Create an Account</h1>
    </div>
    <form>
      <div className="input">
        <i className="fa-solid fa-user"></i>
        <input type="text" value={firstname} onChange={(e)=>setfirstname(e.target.value)} placeholder="First Name" />
      </div>
      <div className="input">
        <i className="fa-solid fa-user"></i>
        <input type="text" value={lastname} onChange={(e)=>setlastname(e.target.value)} placeholder="Last Name" />
      </div>
      <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Email" />
      </div>
      <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="tel"   value={phoneno} onChange={(e)=>setphoneno(e.target.value)} placeholder="Phoneno" />
      </div>
      <div className="input">
        <i className="fa-solid fa-user"></i>
        <input type="text"   value={username} onChange={(e)=>setusername(e.target.value)} placeholder="Username" />
      </div>
      <div className="input">
        <i className="fa-solid fa-lock"></i>
        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Password" />
      </div>
      <input className="signup-btn" onClick={sendtodb} type="submit" value="SIGN UP" /> 
      
      </form>
      <p><Link to={"/login"}style={{textDecoration:'none'}}> Already have an account? Login</Link></p>
      </div>
      </div>
      </div>
      )
    }
    
    export default Signup;
    //<button className="signup-btn" onClick={senddb} type="submit" > SIGN UP</button>