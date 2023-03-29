import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function User() {

   const [person,setPerson] = useState({
        name:"",
        age:0
   }); 

   useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then((r)=>{
            console.log(r.data);
        });
   });

   function handleForm(e){
        let user = {...person};
        user[e.target.name] = e.target.value;
        setPerson(user);
   }

   function register(e){
        e.preventDefault();
        console.log(person);
   }

  return (
    <div>
        <form onSubmit={register}>
            <input onChange={handleForm} name='name' type='text' />
            <input onChange={handleForm} name='age' type='text' />
            <input type="submit" value="save"/>
        </form>
    </div>
  )
}
