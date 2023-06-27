import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode.m} bg-${props.mode.m}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-primary mx-2" type="submit">Search</button>
            </form> */}
            <div className={`form-check form-switch text-${props.mode.theme==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleDarkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">Enable {props.mode.theme==='dark'?'light':'dark'} Mode</label>
            </div>
            {/* <div className={`form-check form-switch text-${props.mode.theme==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleBlueMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">Enable {props.mode.theme==='blue'?'light':'blue'} Mode</label>
            </div>
            <div className={`form-check form-switch text-${props.mode.theme==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleGreyMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">Enable {props.mode.theme==='grey'?'light':'grey'} Mode</label>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
}

Navbar.defaultProps={
    title:'Set Title Here',
    aboutText:'About'
}