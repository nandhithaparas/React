import React, {useEffect,useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';
function Login() {
const Navigate=useNavigate();
const[username,setUsername]=useState('');
const[password,setpassword]=useState('');
const[user,setUser]=useState('');
const fetchData = () => {
  return fetch("http://localhost:8080/login/getlogin")
  .then((response) => response.json())
  .then((data) => setUser(data));
}
useEffect(() => {
  fetchData();
},[])
const authenticate=(e)=>{
  e.preventDefault();
const usercheck = user.find(user => (user.username === username && user.password === password));
if(username.length===0){
alert("Enter Username")
}
else if(password.length===0){
alert("Enter password")
}
else if(!usercheck){
  alert("Wrong Username or Password!")
}
else {
  Navigate("/Details")
}
}
return (
<div id="body">
<div className="form">
<div className="box">
  <div className="header">
    <h2>Login</h2>
  </div>

  <form>
    <div className="input">
      <i className="fa-solid fa-user"></i>
      <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
    </div>
    <div className="input">
      <i className="fa-solid fa-lock"></i>
      <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="Password" />
    </div>
    <input onClick={authenticate} className="signup-btn" type="submit" value="LOGIN" />
  </form>
<p><Link to={"/"} style={{textDecoration:'none'}}> No Account? Signup Now!</Link></p>
  
</div>
</div>
</div>
)
}

export default Login;