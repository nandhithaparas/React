import React, { useEffect, useState } from 'react'
//import {  useNavigate } from 'react-router-dom';
import {  useParams } from 'react-router-dom';
import "./Login.css"
function Update() {
  //const nav=useNavigate();
 // const[id,setid]=useState('');
  const[cropname,setCropname]=useState('');
  const[botanicalname,setBotanicalname]=useState('');
  const[fertilizer,setFertilizer]=useState('');
  const[soil,setSoil]=useState('');
  const[variety,setVariety]=useState('');
  const[season,setSeason]=useState('');
  const[response,setResponse]=useState('');
    const {id}=useParams();
    useEffect(() => {
      const fetchDetails = async () => {
        try {
          const response = await fetch(`http://localhost:8080/agri/getagri/${id}`);
          if (!response.ok) {
            throw new Error('Error:' + response.status);
          }
          const data = await response.json();
          setCropname(data.cropname);
          setBotanicalname(data.botanicalname);
          setFertilizer(data.fertilizer);
          setSoil(data.soil);
          setVariety(data.variety);
          setSeason(data.season);
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchDetails();
    }, [id]);
  
    const handlecropnameChange = (e) => {
      setCropname(e.target.value);
    };
  
    const handlebotanicalnameChange = (e) => {
      setBotanicalname(e.target.value);
    };
  
    const handlefertilizerChange = (e) => {
      setFertilizer(e.target.value);
    };
  
    const handlesoilChange = (e) => {
      setSoil(e.target.value);
    };
    const handlevarietyChange = (e) => {
      setVariety(e.target.value);
    };
    const handleseasonChange = (e) => {
      setSeason(e.target.value);
    };
   
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`http://localhost:8080/agri/update/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ cropname,botanicalname,fertilizer,soil,variety,season }),
        });
        if (!response.ok) {
          throw new Error('Error:' + response.status);
        }
        const data = await response.json();
        setResponse(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
  
  
  return (
    <div id="body">
    <div className='form'>
  <div className='box'>
    <div className='header'>
      <h1>Plants Info</h1>
    </div>
    <form onSubmit={handleSubmit}>
      
      <div className="input">
        <i className="fa-solid fa-user"></i>
        <input type="text" value={cropname} onChange={handlecropnameChange} /*onChange={(e)=>setcropname(e.target.value)}*/ placeholder="cropname" />
      </div>
      <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="text" value={botanicalname} onChange={handlebotanicalnameChange} /*onChange={(e)=>setbotanicalname(e.target.value)}*/placeholder="BotanicalName" />
      </div>
      <div className="input">
        <i className="fa-solid fa-user"></i>
        <input type="text"   value={soil} onChange={handlesoilChange}  /*onChange={(e)=>setsoil(e.target.value)}*/ placeholder="SoilType" />
      </div>
      <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="text"   value={variety} onChange={handlevarietyChange} /*onChange={(e)=>setvariety(e.target.value)}*/ placeholder="Variety" />
      </div>
      <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="text"   value={season} onChange={handleseasonChange} /*onChange={(e)=>setseason(e.target.value)} */ placeholder="Season" />
      </div>
      <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="text"   value={fertilizer} onChange={handlefertilizerChange} /*onChange={(e)=>setfertilizer(e.target.value)}*/ placeholder="Fertilizer" />
      </div>
     <input className="signup-btn"  type="submit" value="UPDATE" />
    </form>
    {response && <div>Response: {JSON.stringify(response)}</div>}

  </div>
</div>
</div>
  )
}

export default Update