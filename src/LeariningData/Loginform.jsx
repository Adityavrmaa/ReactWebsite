import React from 'react';

const Loginform=()=>{
    return(
       <>
       <div className="container">
       <form>
       
       <div className="container col-4 mt-5 text-center">
       <h1>hello {Fname}</h1>
       <input onChange={inputEvent} className="form-control" type="text" placeholder=" input here…" readonly value={form}></input>
    <button onClick={eventChange} className="btn btn-danger mt-2" >Hit me</button>
       </div>
       </form>
       </div>
 </>
    )
}

export default Loginform;