import React from 'react'
import Contact from './components/Contact'

export default function Contactus() {
  return (
    <div style={{backgroundColor:'var(--primary)'}}>
    <div className="container-fluid mt-1 pt-md-3 px-5 pb-md-5 pb-2">
          <div className="container-fluid pt-5 rounded-3 px-md-5">
            <div className="row flex-md-row flex-column-reverse align-items-center">
              <div className="col-md">
                  <div className="d-flex flex-column">
                    <b><h2>Contact Us</h2></b>
                    <h1 className="mt-md-3" style={{ color: "var(--secondary)" }}>Inno Tech Solutions</h1>
                    <p className="res-font mt-md-3">We are open to your queries and suggestions. Let us know your viewpoint via filling out the form below</p>
                  </div>
              </div>
              <div className="col-md text-center">
        <img
          src="/contact.svg"
          style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
          alt="InnoTech Solutions"
        />
      </div>
            </div>
          </div>
        </div>
    <div className='container pt-md-5 mb-md-5 mt-md-5 mt-2 pt-2 shadow rounded-3'>
      <Contact/>
    </div>
    </div>
  )
}
