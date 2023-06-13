import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

function Edit() {

    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [mobile, setmobile] = useState('');
    const [password, setpassword] = useState('');
    const[Response,setResponse]=useState('');
    const {id}=useParams
    const handlefirstnameChange = (e) => {
      setfirstname(e.target.value);
    };
  
    const handlelastnameChange = (e) => {
      setlastname(e.target.value);
    };
    const handleemailChange = (e) => {
        setemail(e.target.value);
      };
      const handlemobileChange = (e) => {
        setmobile(e.target.value);
      };
      const handlepasswordChange = (e) => {
        setpassword(e.target.value);
      };
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`http://localhost:8080/signup/putsignup/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ firstname,lastname,email,mobile,password })
        });
        if (!response.ok) {
          throw new Error('Error: ' + response.status);
        }
        const data = await response.json();
        setResponse(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  return (
    <div>
    <h1>Update Login Data</h1>
    <form onSubmit={handleSubmit}>
      <label>
        firstname:
        <input type="text" value={firstname} onChange={handlefirstnameChange} />
      </label>
      <br />
      <label>
        lastname:
        <input type="text" value={lastname} onChange={handlelastnameChange} />
      </label>
      <br />
      <label>
      email:
      <input type="email" value={email} onChange={handleemailChange} />
    </label>
    <br />
    <label>
    mobile:
    <input type="tel" value={mobile} onChange={handlemobileChange} />
  </label>
  <br />
  <label>
  password:
  <input type="text" value={password} onChange={handlepasswordChange} />
</label>
<br />
      <button type="submit">Update</button>
    </form>
  

</div>


  )
}

export default Edit