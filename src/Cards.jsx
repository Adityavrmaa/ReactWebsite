import React from 'react'
import {NavLink} from 'react-router-dom';
const Imagescard = "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?cs=srgb&dl=pexels-luis-gomes-546819.jpg&fm=jpg";



 const Cards = () => {
    return (
        <>
                 <div class="col-sm-4">
    <div class="card">
    <img class="card-img-top" src={Imagescard} alt="Card image cap"></img>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>





                    
        </>
    )
}
export default Cards;