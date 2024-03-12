import React from 'react'
import { Link } from 'react-router-dom'
import "./Dashboard.css"
import BannerImage from "../Assets/aboutimage.jpg"
import Footer from "../Components/Footer"

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
<Link className='btn btn-outline-dark' to="/canteen">Canteen</Link>
<Link className='btn btn-outline-dark' to="/visitor">Visitor Registration</Link>
<Link className='btn btn-outline-dark' to="/complaints">Complain/Suggestion</Link>
<button className='btn btn-outline-dark'>Fee Payment</button>
</div>
<div >
<img src={BannerImage} alt="" width={800} height={50}/><br/>
<div className='annoucement'>
  <div className='annoucement-header'><p align="center">- ANNOUNCEMENTS -</p></div>
  <br/><br/>
  <ul>
    <li><p>Students can pre-book their daily meals from the Canteen Booking option.</p></li>
    <br/>
    <li><p>Visitor registration should be done 24hrs prior to the arrival for each guest.</p></li>
    <br/>
    <li><p>Students can pre-book their daily meals from the Canteen Booking option.</p></li>
    <br/>
    <li><p>Students can pre-book their daily meals from the Canteen Booking option.</p></li>
  </ul>
  </div>
  

</div>
</div>
<div className="main-content">
       
      </div>
<Footer/>
    </div>
  )
}

export default Dashboard
