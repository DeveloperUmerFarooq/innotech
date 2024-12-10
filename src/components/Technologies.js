import React, { useEffect, useState } from 'react'
import techs from '../techs.json'
import OwlCarousel from 'react-owl-carousel';
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
import  Lottie from 'lottie-react';
export default function Technologies() {
    const [lotties,setLotties]=useState([react,html,css,js,bootstrap,tailwind,figma,laravel]);
    const options={
        autoplay:true,
        dots:false,
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
    <div className='mt-3' style={{backgroundColor:'var(--tertiary)',color:'var(--primary)'}}>
    <h1 className='text-center fs-1 mb-0'>Technologies we know</h1>
    <OwlCarousel className="owl-theme" loop {...options}>
        {techs.map((tech,index)=>
        <div key={index} className='item d-flex justify-content-center align-items-center' style={{height:'5rem'}}>
        {(tech==="Bootstrap"||tech==="Tailwind CSS")?<div><img className='img-anime mx-1' src={lotties[index]}/></div>:lotties&&<Lottie  loop={true}  animationData={lotties[index]} style={{height:'5rem'}} />}
        <h2 className='text-center d-flex align-items-center res-font'>{tech}</h2>
        </div> 
        )}
    </OwlCarousel>
  </div>
  )
}
