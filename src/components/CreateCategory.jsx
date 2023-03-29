import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function CreateCategory() {
    let navigate = useNavigate();
    let [category,setCategory] = useState({
        name:"",
    });
    let token = localStorage.getItem("token");
    function handleForm(e){
        // deep copy 
        let categorydata = {...category};
        categorydata[e.target.name] = e.target.value;
        setCategory(categorydata); 
    }

    async function store(e){
        e.preventDefault();
        let response = await axios.post("http://127.0.0.1:8000/api/category",category,{ headers: {"Authorization" : `Bearer ${token}`} });
        console.log(response);
        navigate('/category');
    }



    return (
        <div className='container'>
            <div className='col-md-6 m-5'>
                <form onSubmit={store}>
                    <div className="mb-3">
                        <label className="form-label">Category Name</label>
                        <input onChange={handleForm} name='name' type="text" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">create</button>
                </form>
            </div>
        </div>
    )
}
