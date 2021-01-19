import React from 'react';
import {NavLink} from "react-router-dom";

 const Menu = () => {
    return (
        <div>
     
      <NavLink activeClassName="active_name" to="/">About Us </NavLink>
      <NavLink to="/NavLink">NavLink </NavLink>
      <NavLink to="/Time">Time </NavLink>
    </div>
    );
};
export default Menu;