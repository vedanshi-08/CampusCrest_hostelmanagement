import React from 'react'
import { Link } from 'react-router-dom'
import "./Dashboard.css"
import BannerImage from "../Assets/aboutimage.jpg"

function Dashboard() {
  return (
    <div className='container'>
        <nav className="navbar navbar-expand-lg bg-purple">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        Campus Crest
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
  </div>
</nav>
<div className='box'>
<div className='left-panel'>
<button className='btn btn-outline-dark'>Canteen</button>
<Link className='btn btn-outline-dark' to="/visitor">Visitor Registration</Link>
<button className='btn btn-outline-dark'>Fee Payment</button>
<Link className='btn btn-outline-dark' to="/complaints">Complain/Suggestion</Link>
</div>
<div >
<img src={BannerImage} alt="" width={800} height={50}/>
</div>
</div>
<div className="main-content">
        
      </div>
    </div>
  )
}

export default Dashboard