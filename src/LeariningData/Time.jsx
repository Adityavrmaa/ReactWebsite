import React, { useState } from 'react';



const Time = () =>{
  const  [Name,setName] = useState();
  const [Fname,FsetName] = useState();
   const SetChange = (e) =>{
    setName(e.target.value);
   }
   const setbtn =() =>{
    FsetName(Name);
   }
return(
<>
<div className="col-6 text-cenetr">
<form>
<h1 className="text-danger">hiii {Fname}</h1>
<input className="form-control" type="text" placeholder="Enter" onChange={SetChange} value={Name}/>
<button className="btn btn-info" onClick={setbtn}>Submit</button>
</form>
</div>
</>
);
};
export default Time;