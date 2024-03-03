import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';

function Complain() {

    
    let navigate=useNavigate()


    const [user, setUser]=useState(
        {room:"",
        suggestions:"",
        complaints:""}
    )

    const {room, suggestions, complaints}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    };

    const onSubmit=(e)=>{
        e.preventDefault();
        alert("Response Noted...Thank you!")
        navigate("/")
    }

  return (
    <div className='container'>
        <nav className="navbar navbar-expand-lg bg-purple">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/">
        Campus Crest
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
  </div>
</nav>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Complaints / Suggestions</h2>

                <form onSubmit={(e)=>onSubmit(e)}>
                 
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                        Room Number
                    </label>
                    <input
                        type={'text'}
                        className='form-control'
                        placeholder='Enter room number'
                        name='room'
                        value={room}
                        onChange={(e)=>onInputChange(e)}
                        />
                </div>

                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                        Suggestions
                    </label>
                    <input
                        type={'text'}
                        className='form-control'
                        placeholder='your suggestions...'
                        name='suggestions'
                        value={suggestions}
                        onChange={(e)=>onInputChange(e)}
                        />
                </div>

                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                        Complaints
                    </label>
                    <input
                        type={'text'}
                        className='form-control'
                        placeholder='your complaints...'
                        name='complaints'
                        value={complaints}
                        onChange={(e)=>onInputChange(e)}
                        />
                </div>
                <button type="submit" className='btn btn-outline-dark'>Submit</button>
                <Link  className='btn btn-outline-danger mx-2' to='/'>cancel</Link>
                   
                </form>
            </div>

        </div>
    </div>
  )
}

export default Complain