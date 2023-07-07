import { Outlet, Link } from "react-router-dom";
import React from 'react';

export default function Navbar(props) {
  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <a className="navbar-brand mx-2" href="/">TextUtils</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link active" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Contact Us</a>
      </li>
    </ul>
    
  </div>
</nav>
    </>
  );
}