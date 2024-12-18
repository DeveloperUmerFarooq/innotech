import React from 'react'
import projects from './JSON/projects.json'
import Card from './components/Card'
import OwlCarousel  from 'react-owl-carousel';
export default function Projects() {
    const options={
        autoplay:true,
        margin:10,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
             
            },
            1000:{
                items:3,
            
            }
        }
    }
  return (
    <div style={{backgroundColor:'var(--primary)'}}>
      <h1 className='text-center pt-md-5 pt-3'>Recent Projects</h1>
      <hr className='mb-md-5 mb-3'/>
      <div className='px-2 px-md-5 pb-3 pb-md-5 '>
            <OwlCarousel className='owl-theme' {...options} loop>
                    {projects.map((item,index)=>(
                        <Card key={index} title={item.title} description={item.description} src={item.src} shadow={false} color="tertiary"/>
                    ))
                    }
                </OwlCarousel>

        
          
        </div>
    </div>
  )
}
