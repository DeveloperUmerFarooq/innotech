import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <>

<footer className="text-center text-lg-start w-100" style={{ backgroundColor: "var(--tertiary)" }}>
  <div className="container d-flex justify-content-center py-5">
    <a href="/" target='_blank' rel='noreferrer noopener'>
    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "var(--secondary)" }}>
      <i className="fab fa-facebook-f"  style={{color:'var(--primary)'}}/>
    </button>
    </a>
    <a href="https://www.linkedin.com/company/innotech-solutions1/" target='_blank' rel='noreferrer noopener'>
    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "var(--secondary)" }}>
    <i className="fa-brands fa-linkedin" style={{color:'var(--primary)'}} />
    </button>
    </a>
    <a href="https://www.instagram.com/intech_sols/profilecard/?igsh=MXNydmxyd3VmNXR4eA==">
    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "var(--secondary)" }}>
      <i className="fab fa-instagram"  style={{color:'var(--primary)'}}/>
    </button>
    </a>
    {/* <a href="#" target='_blank' rel='noreferrer noopener'>
    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "var(--secondary)" }}>
      <i className="fab fa-twitter"  style={{color:'var(--primary)'}}/>
    </button>
    </a> */}
  </div>

  
  <div className="text-center text-white p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
    © 2024 Copyright:
    <Link className="text-white" to="/">Inno Tech Solutions</Link>
  </div>
  
</footer>
</>
  )
}
