import React from 'react'

export default function Card({title,description,src}) {
  return (
    <div>
      <div className="card h-100 bg-transparent shadow" style={{ width: "18rem" }}>
      {src && <img className="card-img-top" src={src} alt="Card image cap" />}
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p> 
  </div>
</div>
    </div>
  )
}
