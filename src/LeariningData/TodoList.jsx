import React from 'react'

 const TodoList = (props) => {
  
    return (
        <div>
              <div className="list mt-2">
              
              <button type="button" className="btn btn-primary btn-sm " 
              onClick={()=>{
                  props.onSelect(props.id);
              }} >Del</button>
                <li className="text-info">{props.TodoData}</li>
                </div>
        </div>
    )
}
export default TodoList;