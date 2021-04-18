import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark p-3 " >
  <div className="container-fluid">
    <a style={{fontSize:'35px'}} className="navbar-brand text-warning ms-5 " href="#">HawkEye</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link ms-5 text-white active" aria-current="page" href="#">Home</a>
        <a className="nav-link ms-5 text-white" href="#">Destination</a>
        <a className="nav-link ms-5 text-white" href="#">Tours</a>
        <a className="nav-link ms-5 text-white" href="#">About Us</a>
        <a className="nav-link ms-5 text-white" href="#">Services</a>
        <a className="nav-link ms-5 text-white" href="#">Contact Us</a>
    
      </div>
    </div>
  </div>
</nav>
    );
};

export default Navbar;