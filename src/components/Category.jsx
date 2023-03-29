import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Category() {

    let navigate = useNavigate();
    let [category,setCategory] = useState([]); 
    useEffect(() => {
        if (localStorage.getItem("token") === null) {
            navigate("/login");
        }
    });

    useEffect(()=>{
        
        getCategoryData();
        
    },[]);
    let token = localStorage.getItem("token");

    async function getCategoryData(){
        let response = await axios.get("http://127.0.0.1:8000/api/category",{ headers: {"Authorization" : `Bearer ${token}`} });
        console.log(response.data.data);
        //    setstate
        setCategory(response.data.data);
    }

    async function deleteCategory(id){
        let response = await axios.delete(`http://127.0.0.1:8000/api/category/delete/${id}`,{ headers: {"Authorization" : `Bearer ${token}`} });
        console.log(response);
        getCategoryData();
    }
    return (
        <>
            <div className='container'>
                <div className='col-md-12'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th >#</th>
                                <th >name</th>
                                <th>delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {category.map((cat)=> <tr key={cat.id}><td>{cat.id}</td><td>{cat.name}</td><td onClick={()=>deleteCategory(cat.id)}>delete</td></tr> )}                        

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
