import React from 'react';
import Cards from './Cards';
import Cardarray from './Cardarray';

 const Services = () => {
    return (
        <>
        <div className="container col-10 g-2">
<div class="row gy-3">
 
{    
           Cardarray.map((req,res)=>{
                 return <Cards
                 key = {res}
                 data={req.imagedata}
                 title={req.title}
                 />
           
           })
         }

  
  
</div>
</div>

      
       
   


        </>
    )
}
export default Services;