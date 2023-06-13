import { useEffect, useState } from 'react'
import axios from 'axios'
import React from 'react'
import './Display.css'
import { Link } from 'react-router-dom'

function Display() {
  const [details, setDetails] = useState([]);
 

  useEffect(() =>{
    axios.get(`http://localhost:8080/agri/get`)
    .then((response)=>
    {
      setDetails(response.data)

    }).catch((error)=>console.log(error))

  },[]
  )

  const Deleteagri =(id) => {
    if (window.confirm('Sure to Delete?')) {
      axios
        .delete(`http://localhost:8080/agri/deletes/${id}`)
        .then((response) => {
          fetch();
        })
        .catch((error) => console.log(error));
    }
  };
  return (
  

    <div className='bg'>

    <div className="tcontent">
      <div className='write'>
      
      <h1 className='heading' ><button className='add'><Link to={"/Details"}> Add </Link> </button>ALL PLANTS INFO</h1>
     
              

      <table>
        <thead>
          <tr>
            <th>PLANT ID</th>
            <th>PLANT NAME</th>
            <th >BOTANICAL NAME</th>
            <th>SOIL</th>
            <th>SEASON</th>
            <th>VARIETY</th>
            <th>UPDATE</th>
            <th>DELETE</th>
            
          </tr>
        </thead>
        <tbody className='detailsfont'>
        
        {details.map(det => {
            return(
            <tr >
              <td>{det.id}</td>
              <td>{det.cropname}</td>
              <td>{det.botanicalname}</td>
              <td>{det.soil}</td>
              <td>{det.season}</td>
              <td>{det.variety}</td>
              
              <td>
                
              <Link to={`/update/${det.id}`}> <button className='sub'type='submit'>  Update</button></Link></td>
              <td><button className='del' type='submit' onClick={() => Deleteagri(det.id)}>Delete</button></td>
            </tr>
        );
        })}
        </tbody>
      </table>
     
  </div>

      </div>
      </div>
  )
}

export default Display;