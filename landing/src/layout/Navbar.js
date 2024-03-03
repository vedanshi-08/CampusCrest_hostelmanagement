import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
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

    <Link className='btn btn-outline-dark' to="/visitor/adduser">Add Visitor</Link>

   


    
  </div>
</nav>

    </div>
  )
}

export default Navbar