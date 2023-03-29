import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function Login() {

    let navigate = useNavigate();
    let [user,setUser] = useState({
        email:"",
        password:""
    });

    function handleForm(e){
        // deep copy 
        let userdata = {...user};
        userdata[e.target.name] = e.target.value;
        setUser(userdata); 
    }

    function login(e){
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/login",user).then((r)=>{
            localStorage.setItem("token",r.data.token);
            navigate("/");
            // console.log(r.data.token);
        });
    }

    return (
        <>

            <div className='container'>
                <div className='col-md-6 m-5'>
                <form onSubmit={login}>
                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input onChange={handleForm} name='email' type="email" className="form-control"  />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input onChange={handleForm} name='password' type="password" className="form-control"  />
                </div>
        
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
                </div>
            </div>

        </>
    )
}
