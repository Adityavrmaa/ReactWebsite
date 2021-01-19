import React from 'react'


const Card = (props) =>{
    return (
        <>
        <div className="container  col-4">
        <div className="card " >
  <img className="card-img-top" src={props.imgsrc} alt="cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.bega}</p>
    <a href="https://www.pexels.com/" className="btn btn-primary">Click me</a>
        </div>
        </div>
        </div>
        </>
    )
}

export default Card;
