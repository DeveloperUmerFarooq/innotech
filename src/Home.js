import React, { lazy} from 'react'
import Technologies from './components/Technologies';
import Carousel from './components/Carousel';
import services from './JSON/services.json';
const Goals=lazy(()=>import('./Goals'));
const WhyUs = lazy(()=>import('./WhyUs'))
const Contact = lazy(()=>import('./components/Contact'))
export default function Home() {
  return (
    <div className="pt-2 pt-md-4" style={{ backgroundColor: 'var(--primary)' }}>
  <div className="container">
    <div className="row mt-3 mt-md-5 align-items-center">
      <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-center text-md-start">
        <h1 style={{color:'var(--secondary)'}}>Welcome to InnoTech Solutions</h1>
        <p className="res-font mx-auto mx-md-0 text-justify">
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
  <div className='d-flex flex-column flex-grow'>
  <Technologies/>
  <Goals/>
  <WhyUs/>

  </div>
  
    <div className='py-3' style={{ backgroundColor: 'var(--secondary)' }}>
      <h1 className='fs-1 text-center' style={{color:'var(--primary)'}}>Get Started</h1>
      <p className='text-center res-font'>Ready to take your business to the next level? Contact us today to discuss your project and learn how we can help.
      </p>
      <div className='d-flex gap-3 justify-content-center'>
        <a href="#contact"><button className="btn btn-primary p-2">Contact us</button></a>
      </div>
    </div>
    <div className='container'>
        <h1 className='text-center py-2 py-md-5' style={{color:"var(--tertiary)"}}>Services We provide</h1>
    </div>
    <div className='px-md-3 px-1'>
    <Carousel items={services} color={"tertiary"}/>
    </div>
    <div className='container pb-md-5 pb-3 mt-5'>
    <h1 className='text-center fs-1'>Contact Us</h1>
    <Contact/>
      </div>
</div>
  )
}
