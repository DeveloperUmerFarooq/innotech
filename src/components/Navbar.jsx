import React from 'react'
import { Link } from 'react-router'

export default function Navbar(links) {
  return (
    <header className='position-sticky top-0 p-0 m-0' style={{'top':'-2px'}}>
    <nav className="navbar navbar-expand-lg m-0" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand fs-4" style={{'color':'var(--primary)'}} href="/">Inno Tech Solutions</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{'color':'var(--primary)'}} />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto gap-md-4 text-center">
              <Link className="nav-link fs-5" style={{'color':'var(--primary)'}} aria-current="page" to="/">Home</Link>
              <Link className="nav-link fs-5" style={{'color':'var(--primary)'}} to="/about">Services</Link>
              <Link className="nav-link fs-5" style={{'color':'var(--primary)'}} to="/about">Projects</Link>
              <Link className="nav-link fs-5" style={{'color':'var(--primary)'}} to="/about">About us</Link>
              <Link className="nav-link fs-5" style={{'color':'var(--primary)'}} to="/contact">Contact us</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
