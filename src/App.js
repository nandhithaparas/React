import Login from './AgriInfo/Login';
import Details from './AgriInfo/Details';
import Signup from './AgriInfo/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Display from './AgriInfo/Display';
import Update from './AgriInfo/Update';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
  <Routes>
  <Route path="/" element={<Signup/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/Details" element={<Details/>}/>
  <Route path="/display" element={<Display/>}/>
  <Route path="/update/:id" element={<Update/>}/>
  
  
  </Routes>
  </BrowserRouter>
    </div>
    );
  }
  
  

  export default App;
