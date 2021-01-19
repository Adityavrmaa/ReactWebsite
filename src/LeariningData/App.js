import React from 'react';
import {Route,Switch} from 'react-router-dom';
import About from './About';
import Navbar from './Navbar';
import Menu from './Menu';
import Time from './Time';


const App=()=>
 {
  return (
    <>
    <Menu/>
    <Switch>
   <Route exact path="/" component={About}/>
   
   <Route exact path="/navbar" component={Navbar}/>
   <Route exact path="/Time" component={Time}/>
   <Route component={Error}/>
  
   </Switch>




{/* 
{Link.map((values)=>{
  return(
    <Card imgsrc= {values.imgsrc}
  name={values.name}
  bega={values.bega}/>
  )
})} */}


    </>
  )
}

export default App;
