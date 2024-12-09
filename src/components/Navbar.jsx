import React from 'react'
import { Link } from 'react-router'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-black position-sticky top-0" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              <Link className="nav-link" to="/about">Features</Link>
              <Link className="nav-link" to="/about">Pricing</Link>
            </div>
          </div>
        </div>
      </nav>
  )
}
