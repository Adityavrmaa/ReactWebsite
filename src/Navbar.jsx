import React from 'react';
import {NavLink} from 'react-router-dom';

 const Navbar = () => {
    return (
        <>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <NavLink className="navbar-brand " to="/">Aditya</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink activeClassName="Nav_menu active" exact className="nav-link" to="/">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="Nav_menu" className="nav-link" to="/services">Servies</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="Nav_menu" className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="Nav_menu" className="nav-link" to="/contact">Contact</NavLink>
      </li>
    </ul>
  </div>
</nav>
        </div>
        </>
    )
}

export default Navbar;