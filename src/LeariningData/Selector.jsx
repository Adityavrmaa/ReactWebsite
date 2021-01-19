import React, { useState, useEffect } from 'react'
import axios from 'axios';

  const Selector = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [move, setMove] = useState();
   useEffect(() => {
   async function getdata() {
    const callapi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
    console.log(callapi.data.name);
    
  setName(callapi.data.name)
  setMove(callapi.data.moves.length)
  }
  
  getdata();
     });
 

    return (
        <>
        <div className='container text-center mt-5'>
           <h1>good choice {name}</h1>
           <h1>good name {num}</h1> 
           <h1>total moves {move}</h1>
            <select
             value={num} onChange={(e)=>
            {
               setNum(e.target.value);
               }} >
            <option value="1">one</option>
            <option value="25">Twinty five</option>
            <option value="3">three</option>
            <option value="4">four</option>
            <option value="5">five</option>
            <option value="6">six</option>
            <option value="7">seven</option>
             </select>
             </div>
        </>
    )
}
export default Selector;