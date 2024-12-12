import React from 'react'
import Card from './components/Card'
import why from './JSON/whyus.json'
export default function WhyUs() {
  return (
    <div className="pt-3 pt-md-5 pb-md-3 pb-0" style={{backgroundColor:'var(--tertiary)',color:'var(--primary)'}}>
    <h1 className='text-center fs-1'>Why Choose Us</h1>
    <hr/>
    <div className='d-flex flex-wrap flex-grow gap-2 gap-md-3 justify-content-center mb-5'>
    {why.map((elem, index) => (
  <Card key={index} title={elem.title} description={elem.description} color={'primary'} />
      ))}

    </div>
  </div>
  )
}
