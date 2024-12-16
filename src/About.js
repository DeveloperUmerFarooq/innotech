import React from 'react'
import Navbar from './components/Navbar'
import aboutUs from './JSON/about.json'
import Contact from './components/Contact'
import Footer from './components/Footer';
import Goals from './Goals';
export default function About() {
  return ( 
    <div style={{backgroundColor:'var(--primary)'}}>
    <Navbar/>
    <div className="container-fluid pt-md-5 pt-3 pt-3 px-5">
  <div className="container-fluid pt-md-5 pt-2 rounded-3 px-md-5">
    <div className="row  flex-columnlex-sm-column-reverse align-items-center">
      <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-center text-md-start">
          <div className="d-flex flex-column">
            <h2>About</h2>
            <h1 className="mt-md-3" style={{ 'color': "var(--secondary)" }}>Inno Tech Solutions</h1>
            <p className="res-font mt-md-3">Innovative web solutions, design excellence, ensuring unparalleled digital success for clients</p>
          </div>
      </div>
      <div className="col-12 col-md-6 text-center">
          <img src="/about.svg" className="image"  style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }} alt="" />
      </div>
    </div>
    {aboutUs.map((elem,index)=><div className='row mt-md-5 mt-3 pt-md-5 pt-3'>
      {index%2!==0?(<div className='row' key={index}>
      <div className='col-md d-flex flex-column justify-content-center gap-md-5 gap-1'>
          <h1 style={{'color':'var(--secondary)'}}>{elem.title}</h1>   
          <p className='res-font text-start'>{elem.content}</p>
      </div>
      <div className="col-md text-center">
        <img
          src={`/about/${elem.src}`}
          style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
          alt="InnoTech Solutions"
        />
      </div>
      </div>)

      :(<div className='row' key={index} >
      <div className="col-md text-center">
        <img
          src={`/about/${elem.src}`}
          style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
          alt="InnoTech Solutions"
        />
      </div>
      <div className='col-md d-flex flex-column justify-content-center gap-md-5 gap-1'>
          <h1 style={{ 'color': "var(--secondary)" }}>{elem.title}</h1>
          <p className='res-font text-start'>{elem.content}</p>   
      </div>
      </div>)}
    </div>)}
  </div>
</div>
  <Goals/>
    <div className='mt-md-5 mt-3 pt-md-5'>
      <h1 className='text-center'>Contact Us</h1>
      <br/>
      <div className='container pb-md-5'>
    <Contact/>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
