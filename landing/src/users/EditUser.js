import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate,Link, useParams } from 'react-router-dom';

function EditUser() {

    
    let navigate=useNavigate();

    const {id}=useParams()


    const [user, setUser]=useState(
        {name:"",
        username:"",
        email:""}
    )

    const {name, username, email}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    };

    useEffect(()=>{
        loadUser();
    },[]);

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`,user);
        navigate("/visitor")
    };

    const loadUser= async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Edit User</h2>

                <form onSubmit={(e)=>onSubmit(e)}>
                 
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                        Name
                    </label>
                    <input
                        type={'text'}
                        className='form-control'
                        placeholder='Enter Name'
                        name='name'
                        value={name}
                        onChange={(e)=>onInputChange(e)}
                        />
                </div>

                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                        Username
                    </label>
                    <input
                        type={'text'}
                        className='form-control'
                        placeholder='Enter username'
                        name='username'
                        value={username}
                        onChange={(e)=>onInputChange(e)}
                        />
                </div>

                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                        Email
                    </label>
                    <input
                        type={'text'}
                        className='form-control'
                        placeholder='Enter email address'
                        name='email'
                        value={email}
                        onChange={(e)=>onInputChange(e)}
                        />
                </div>
                <button type="submit" className='btn btn-outline-dark'>Save Changes</button>
                <Link  className='btn btn-outline-danger mx-2' to='/visitor'>Discard</Link>
                   
                </form>
            </div>

        </div>
    </div>
  )
}

export default EditUser