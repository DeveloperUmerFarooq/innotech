import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <>

<footer className="text-center text-lg-start w-100" style={{ backgroundColor: "var(--tertiary)" }}>
  <div className="container d-flex justify-content-center py-5">
    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "var(--secondary)" }}>
      <i className="fab fa-facebook-f" />
    </button>
    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "var(--secondary)" }}>
    <i className="fa-brands fa-linkedin" />
    </button>
    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "var(--secondary)" }}>
      <i className="fab fa-instagram" />
    </button>
    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "var(--secondary)" }}>
      <i className="fab fa-twitter" />
    </button>
  </div>

  
  <div className="text-center text-white p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
    © 2024 Copyright:
    <Link className="text-white" to="/">Inno Tech Solutions</Link>
  </div>
  
</footer>
</>
  )
}
