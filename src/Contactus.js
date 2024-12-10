import React from 'react'
import Contact from './components/Contact'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Contactus() {
  return (
    <div style={{backgroundColor:'var(--primary)'}}>
    <Navbar/>
    <div className="container-fluid mt-md-5 mt-3 pt-3 px-5 pb-5">
          <div className="container-fluid pt-5 rounded-3 px-md-5">
            <div className="row  flex-columnlex-sm-column-reverse align-items-center">
              <div className="col-md">
                  <div className="d-flex flex-column">
                    <b><h2>Contact Us</h2></b>
                    <h1 className="mt-3" style={{ color: "var(--secondary)" }}>Inno Tech Solutions</h1>
                    <p className="res-font mt-3">We are open to your queries and suggestions. Let us know your viewpoint via filling out the form below</p>
                  </div>
              </div>
              <div className="col-md">
                <center>
                  <img src="contact.svg" className="image" alt="" />
                </center>
              </div>
            </div>
          </div>
        </div>
    <div className='container pt-5 mb-5 mt-5 shadow rounded-3'>
      <Contact/>
    </div>
    <Footer/>
    </div>
  )
}
