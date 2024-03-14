import React from 'react'
import { Link } from 'react-router-dom'
import "./Canteen.css"

function Canteen() {
  return (
    <div>
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

<div className='canteen-page'>
    <div className='header'><p align="center" >TODAY'S MENU</p></div>
    <div className='content'>
    <div className='breakfast'>
    <p>Breakfast:</p>
    </div>

    <div className='lunch'>
    <p>Lunch:</p>
    </div>
    <div className='dinner'>
    <p>Dinner:</p>
    </div>
    </div>
    
</div>
    </div>
  )
}

export default Canteen
