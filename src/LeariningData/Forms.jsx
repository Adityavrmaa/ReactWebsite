import React, { useState } from 'react';



const Forms = () =>{
  const [form, SetForm] = useState();
  const [Fname, SetFname] = useState();

  const inputEvent=(e)=>{
    SetForm(e.target.value);
  }


  const eventChange=()=>{
     SetFname(form);
  }



    return(
        <>
    
   <div className="container col-4 mt-5 text-center">
     <h1>hello {Fname}</h1>
     <input onChange={inputEvent} className="form-control" type="text" placeholder=" input here…" readonly value={form}></input>
     <button onClick={eventChange} className="btn btn-danger mt-2" >Hit me</button>
   </div>
      </>
    )
}

export default Forms;