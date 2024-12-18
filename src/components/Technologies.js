import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import Lottie from 'lottie-react';
import techs from '../JSON/techs.json'
import '../App.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import html from '../techAnimations/html.json';
import react from '../techAnimations/react.json';
import css from '../techAnimations/CSS.json';
import js from '../techAnimations/Js.json';
import figma from '../techAnimations/Figma.json';
import laravel from '../techAnimations/Laravel.json';
import bootstrap from '../techAnimations/bootstrap.png';
import tailwind from '../techAnimations/tailwindcss.png';
import python from '../techAnimations/Python.json';
import sql from '../techAnimations/SQL.json'
export default function Technologies() {
    const lotties=[react,html,css,js,python,bootstrap,tailwind,figma,sql,laravel];
    const options={
        autoplay:true,
        dots:false,
        loop:true,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:4,
             
            },
            1000:{
                items:5,
            
            }
        }
    }
  return (
    <div className='mt-2 mt-md-3' style={{backgroundColor:'var(--tertiary)',color:'var(--primary)'}}>
    <h1 className='text-center fs-1 mb-1 mb-md-3 '>Technologies we know</h1>
    <OwlCarousel className="owl-theme mb-2" {...options}>
        {techs.map((tech,index)=>
        <div key={index} className='item d-flex justify-content-center align-items-center' style={{height:'5rem'}}>
        {(tech==="Bootstrap"||tech==="Tailwind CSS")?<div><img className='img-anime mx-1' src={lotties[index]} alt='...'/></div>:lotties&&<Lottie  loop={true}  animationData={lotties[index]} style={{height:'4rem'}} />}
        <h2 className='text-center d-flex align-items-center fs-3 mt-3' style={{color:'var(--primary)'}}>{tech}</h2>
        </div> 
        )}
    </OwlCarousel>
  </div>
  )
}
