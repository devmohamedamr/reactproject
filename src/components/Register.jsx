import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function Register() {

  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  function handleForm(e) {
      // deep copy
      let userobject = {...user};
      userobject[e.target.name] = e.target.value;
      setUser(userobject);
  }

  function register(e){
    e.preventDefault();
    // console.log(user);
    axios.post('http://127.0.0.1:8000/api/register',user).then((response)=>{
      console.log(response);
      navigate('/login');
    });
  }



  return (
    <>
      <div className='container'>
        <div className='col-md-6 m-5'>
          <form onSubmit={register}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" onChange={handleForm} name='name' className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email"  onChange={handleForm} name='email' className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password"  onChange={handleForm} name='password' className="form-control" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}
