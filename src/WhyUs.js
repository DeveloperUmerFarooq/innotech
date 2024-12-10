import React from 'react'
import Card from './components/Card'
import why from './whyus.json'
export default function WhyUs() {
  return (
    <div className="pt-5 pb-3" style={{backgroundColor:'var(--tertiary)',color:'var(--primary)'}}>
    <h1 className='text-center fs-1'>Why Choose Us</h1>
    <hr/>
    <div className='d-flex flex-wrap flex-grow gap-5 justify-content-center mb-5'>
    {why.map((elem, index) => (
  <Card key={index} title={elem.title} description={elem.description} color={'primary'} />
      ))}

    </div>
  </div>
  )
}
