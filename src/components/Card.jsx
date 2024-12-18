import React from "react";

export default function Card({ title, description, src,shadow=true,color,height=300}) {
  return (
    <div className="bg-transparent" style={{'transition':'all 1s ease-in',width:`${src?'':'18rem'}`}} >
      <div className={`card h-100 bg-transparent ${shadow?'shadow':''} item`}>
        {src && ( <img className="card-img-top" src={src} alt="img" height={height} width={100}/>)}
        <div className="card-body mb-3" style={{ height: "10rem",color:`${color&&`var(--${color})`}` }}>
          <h5 className="card-title">{title}</h5>
          <hr />
          <p className="card-text" style={{color:`var(--${color})`}}>{description}</p>
        </div>
      </div>
    </div>
  );
}
