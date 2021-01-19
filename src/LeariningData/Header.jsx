import React from 'react';
class Header extends React.Component{
    constructor(){
        super()
     this.state={
         massage:"hiiii there"
     }
    }
    Event(){
        this.setState({
            massage:'chnage data'
        })
    }
 render(){
  return (
      <>
  <h1>hello {this.state.massage}</h1>
  <button onClick={()=>{this.Event()}}>Click</button>

</>
  )
 }

}
export default Header;