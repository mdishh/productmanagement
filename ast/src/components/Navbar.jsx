import React from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
function Navbar() {
  const  account  = useContext(DataContext);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      {/* <a className="navbar-brand" href="#">Website</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/home">Home</Link >
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to="/contact">Contact Us</Link >
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to="/products">Products</Link >
          </li>
          {account != null && (
              <li className="nav-item">
                <Link className="nav-link" to="/">Logout</Link>
              </li>
            )}
          
          
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar