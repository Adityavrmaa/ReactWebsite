import React from 'react'
import {NavLink} from 'react-router-dom';

 const Samefile = (props) => {
    return (
        <div>
            <section id="homepage" className="d-flex align-items-center">
             <div className="container-fluid">
             <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
            <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
            <h3>Hello,</h3>
           <h1>{props.name}</h1>
           <h2 className="my-2 display-4 bolder"><span className=" text-info">M</span><span className="text-success">E</span><span className="text-Success">R</span><span className="text-secondary">N</span> <span>DEVELOPER</span></h2>
           <div>
           <NavLink to={props.visit} className="btn btn-outline-primary rounded-pill px-4" >{props.buttonName}</NavLink></div>
            </div> 
            <div className="col-lg-6 order-1 order-lg-2 Home_image ">
           
          <img src={props.imagesrc} className="img-fluid image_animated" alt="homeImage"/>
          </div>
          
            </div>

            </div>
             </div>
             </div>
            </section>
        </div>
    );
};
export default Samefile;