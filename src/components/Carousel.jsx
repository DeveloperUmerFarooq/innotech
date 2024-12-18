import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Card from './Card';
export default function Carousel({items,color="primary",dots=true}) {
    const options={
        autoplay:true,
        dots:dots,
        margin:10,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
             
            },
            1000:{
                items:4,
            
            }
        }
    }
  return (
    <div>
      <OwlCarousel className='owl-theme' {...options} loop>
        {items.map((item,index)=>(
            <Card key={index} title={item.title} description={item.description} src={item.src} shadow={false} color={color}/>
        ))
        }
    </OwlCarousel>
    </div>
  )
}
