import React from 'react'
import services from './JSON/services.json'
import Card from './components/Card'
export default function Services() {
  return (
    <>
      <div style={{backgroundColor:'var(--primary)'}}>
        <h1 className='text-center pt-md-5 pt-3'>Our Services</h1>
        <hr className='mb-md-5 mb-3'/>
        <div className='row mx-auto gy-3 justify-content-center pb-3 pb-md-5'>
          {services.map((service,key)=>
          <div className='col-md-3'>
            <Card className="h-100" key={key} title={service.title} description={service.description} src={service.src}/>
          </div>
          )
            
          }
          
        </div>
      </div>
        
    </>
  )
}
