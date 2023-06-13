import React, { useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom';
import "./Login.css"
function Details() {
const Navigate=useNavigate();
const[id,setId]=useState('');
const[cropname,setCropname]=useState('');
const[botanicalname,setBotanicalname]=useState('');
const[fertilizer,setFertilizer]=useState('');
const[soil,setSoil]=useState('');
const[variety,setVariety]=useState('');
const[season,setSeason]=useState('');
 
const sendtodb=(e)=>{
e.preventDefault()
const details={id,cropname,botanicalname,fertilizer,soil,variety,season}
if(id.length===0||cropname.length===0||botanicalname.length===0||fertilizer.length===0||soil.length===0||variety.length===0||season.length===0){
alert("Enter All fields")
}
else{
fetch("http://localhost:8080/agri/post  ",
{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(details)
}
).then(()=>{
console.log("New Detail Added");   
console.log(JSON.stringify(details));
console.log(e);
Navigate("/Display")

})
}
}
return (
<div id="body">
<div className='form'>
<div className='box'>
<div className='header'>
<h1>Plants Info</h1>
</div>
<form>
<div className="input">
  <i className="fa-solid fa-user"></i>
  <input type="text" value={id} onChange={(e)=>setId(e.target.value)} placeholder="Id" />
</div>
<div className="input">
  <i className="fa-solid fa-user"></i>
  <input type="text" value={cropname} onChange={(e)=>setCropname(e.target.value)} placeholder="cropname" />
</div>
<div className="input">
  <i className="fa-solid fa-envelope"></i>
  <input type="text" value={botanicalname} onChange={(e)=>setBotanicalname(e.target.value)} placeholder="BotanicalName" />
</div>
<div className="input">
  <i className="fa-solid fa-user"></i>
  <input type="text"   value={soil} onChange={(e)=>setSoil(e.target.value)} placeholder="SoilType" />
</div>
<div className="input">
  <i className="fa-solid fa-envelope"></i>
  <input type="text"   value={variety} onChange={(e)=>setVariety(e.target.value)} placeholder="Variety" />
</div>
<div className="input">
  <i className="fa-solid fa-envelope"></i>
  <input type="text"   value={season} onChange={(e)=>setSeason(e.target.value)} placeholder="Season" />
</div>
<div className="input">
  <i className="fa-solid fa-envelope"></i>
  <input type="text"   value={fertilizer} onChange={(e)=>setFertilizer(e.target.value)} placeholder="Fertilizer" />
</div>
<input className="signup-btn" onClick={sendtodb} type="submit" value="SAVE" />
</form>
<Link to={"/Display"}><h2>Details</h2></Link> 
</div>
</div>
</div>
)
}

export default Details;