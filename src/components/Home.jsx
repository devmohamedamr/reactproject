import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
export default function Home() {

  let navigate = useNavigate();

  useEffect(()=>{
    
    if(localStorage.getItem("token") === null){
      navigate("/login");
    }
  });
  return (
    <>

        <h1>home</h1>
    </>
  )
}
