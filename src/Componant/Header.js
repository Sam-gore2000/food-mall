import React from 'react'
import food_logo from '../Asset/sam_logo.png';
// import food1_logo from '../Asset/logo2.png'

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src={food_logo} width="100" height="50" className="d-inline-block align-top" alt="" loading="lazy"/>
        {/* <span className="ms-2">Food Mall</span> */}
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#">Cart</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
