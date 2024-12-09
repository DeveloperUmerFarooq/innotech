import React from 'react'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
export default function Home() {
  return (
    <div className="pt-5" style={{ backgroundColor: 'var(--primary)' }}>
  <div className="container">
    <div className="row mt-5 align-items-center">
      <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-center text-md-start">
        <h1>Welcome to InnoTech Solutions</h1>
        <p className="fs-4 mx-auto mx-md-0 text-justify">
          At InnoTech Solutions, we drive innovation and growth through cutting-edge technology solutions. Our mission is to empower businesses with the tools and expertise needed to thrive in an ever-evolving digital landscape.
        </p>
      </div>
      <div className="col-12 col-md-6 text-center">
        <img
          src="/landing1.svg"
          style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
          alt="InnoTech Solutions"
        />
      </div>
    </div>
  </div>
  <div className="container mt-5">
    <h1 className='text-center fs-1'>Why Choose Us</h1>
    <Carousel/>
  </div>
  <Footer/>
</div>
  )
}
