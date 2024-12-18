import React from 'react'
import Carousel from './components/Carousel';
import goals from './JSON/goals.json'
import './App.css'
export default function Goals() {
  return (
    <div className='position-relative'style={{backgroundColor:'var(--secondary)'}}>
    <div className='mt-4 mt-md-5 pt-2' style={{color:'var(--primary)'}} id='goals'>
      <h1 className='text-center fs-1'>Our Goals</h1>
      <div className='mt-3 mt-md-5 mb-md-5 mb-3'>
      <Carousel items={goals} dots={false}/>
      </div>
    </div>
    </div>
  )
}
