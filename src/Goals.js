import React from 'react'
import Carousel from './components/Carousel';
import goals from './goals.json'
import './App.css'
export default function Goals() {
  return (
    <div className='position-relative'>
    <div className='mt-5 pt-3' style={{backgroundColor:'var(--secondary)',color:'var(--primary)'}} id='goals'>
      <h1 className='text-center fs-1'>Our Goals</h1>
      <div className='mt-5 py-3' style={{color:'var(--primary)'}}>
      <Carousel items={goals}/>
      </div>
    </div>
    </div>
  )
}
