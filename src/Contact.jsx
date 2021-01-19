import React, { useState } from 'react';


  const Contact = () => {
    const [set, SetState] = useState({
      fullname:"",
      phoneno: "",
      email:"",
      textarea: ""
    })

   const inputEvent=(e)=>{
     const {name,value} = e.target;

     SetState((statevalue)=>{
       return{
       ...statevalue,
       [name]:value
       }
     })
   }
   
   const formSubmit = (event) => {
     event.preventDefault()
     alert(`name: ${set.fullname},phone: ${set.phoneno},email address : ${set.email},comments : ${set.textarea}`)
   }



    return (
         <>
 <div class="container col-5 pt-5 ">
 <form onSubmit={formSubmit} >
  <div class="form-group ">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="fullname" aria-describedby="name" name="fullname" value={set.fullname} onChange={inputEvent}/>
   
  </div>
  <div class="form-group ">

    <label for="Mobilenumber">phone no</label>
    <input type="tel" class="form-control" id="Mobilenumber" name="phoneno" value={set.phoneno} onChange={inputEvent} />
    
  </div>
  <div class="form-group ">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" name="email" value={set.email} aria-describedby="emailHelp" onChange={inputEvent}/>
    
  </div>
  
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" value={set.textarea}  name="textarea" rows="3" onChange={inputEvent}></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form></div>

        </>
    ); 
}


export default Contact;