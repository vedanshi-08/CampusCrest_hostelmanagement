import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import Navbar from '../layout/Navbar';

function Home() {


    const[users, setUsers]=useState([]);

    const {id}=useParams()

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers =async()=>{
        const result=await axios.get("http://localhost:8080/user");
        setUsers(result.data);
    }
    const deleteUsers= async(id)=>{
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()
    }

  return (
    <div className='container'>
        <div className='py-4'>
          <Navbar/>
        <table className="table shadow" >
  <thead>
    <tr>
      <th scope="col">Visitor No.</th>
      <th scope="col">Visitor Name</th>
      <th scope="col">Student</th>
      <th scope="col">email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

    {
        users.map((user,index)=>(
        <tr>
        <th scope="row" key={index}>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
            <Link className='btn btn-primary mx-2' to={`/visitor/viewuser/${user.id}`}>View</Link>
            <Link className='btn btn-outline-primary mx-2' to={`/visitor/edituser/${user.id}`}>Edit</Link>
            <button className='btn btn-danger mx-2'
                onClick={()=>deleteUsers(user.id)}
            >Delete</button>
        </td>
        </tr>
        ))
    }
    

  </tbody>
</table>
        </div>
    </div>
  )
}

export default Home