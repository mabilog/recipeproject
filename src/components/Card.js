import React from 'react'

const Card = ({results}) => {
  console.log(results);
  return (
    <>
    <div className="card">
      <div className="card-body">
         {/*  
             <h5 className="card-title">{result.name}</h5>
             <h6 className="card-subtitle">{result.id}</h6>
            <p className="card-text">Something something too sweet for you bb</p> 
            <img src={result.img} alt={result.name}/>
       */}
      </div>
    </div>
    </>
    
  )
}

export default Card
