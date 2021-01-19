import React, {useState} from 'react'
import TodoList from "./TodoList";

export const Todo = () => {
  const [chnageValue, setValue] = useState()
   const [secondChange, setSecondChange] = useState([])

  const changeEvent=(e)=>{
    setValue(e.target.value)
  }
  const clickChange = ()=>{
    setSecondChange((funPut)=>{
      return[...funPut,chnageValue]
    })
    setValue("")
  }

  const DelItems=(id)=>{
    console.log("del");
    setValue((funPut)=>{
      return funPut.filter((Datainsert, index) => {
        return index!==id;
      })
    })
}

 

    return (
        <div className="container col-4 ">
        <div className="card" >
  <div className="card-body">
    <h5 className="card-title">Todo List</h5>
    <label for="inputPassword" className="col-form-label">Add</label>

    <div className="d-flex">
    <input className="form-control" type="text" placeholder="input" value={chnageValue}  onChange={changeEvent}/>
    <button onClick={clickChange} type="button" className="ml-3 btn btn-info">Add</button></div>


    <ul>
      
      {secondChange.map((itemValue,index )=>{
             /* pass the key to know different component to connect data */
        return <TodoList value={itemValue} key={index} id={index} TodoData={itemValue}
          onSelect={DelItems}
        />
             
      })}
    </ul>
   
  </div>
</div>
            
        </div>
    )
}