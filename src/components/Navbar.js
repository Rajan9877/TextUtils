import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Navbar(props) {

const [color, setColor] = useState('black');
function showMode(){
  if( props.mode === "light"){
    props.setMode('dark')
    setColor('white')
    document.body.style.backgroundColor = 'rgb(118, 118, 118)';
    document.body.style.color = 'white';
  }else{
    props.setMode('light')
    setColor('black')
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
}

const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <Link className="navbar-brand mx-2" to="/">TextUtils</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active" onClick={() => handleTabClick(1)}>
        <Link className={`nav-link ${activeTab === 1 ? 'active' : ''}`} to="/">Home</Link>
      </li>
      <li className="nav-item" onClick={() => handleTabClick(2)}>
        <Link className={`nav-link ${activeTab === 2 ? 'active' : ''}`} to="/about">About</Link>
      </li>
    </ul>
  </div>
    <div className="form-check form-switch mx-3">
    <input className="form-check-input" onClick={showMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${color}`} htmlFor="flexSwitchCheckDefault">{props.mode=='light'? 'Enable' : 'Disable'} Dark Mode</label>
  </div>
</nav>
    </>
  );
}