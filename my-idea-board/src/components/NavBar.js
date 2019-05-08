import React, { Component } from "react";
import { connect } from 'react-redux';

import {
  NavLink,
} from "react-router-dom";


class NavBar extends Component {
  render() {
    return (
      <div>
         <ul>
          <li className ="signin"><NavLink to="/signin">Sig in</NavLink></li>
          <li className ="signin"><NavLink to="/signup">Sign up</NavLink></li>
          <li className ="home1"><NavLink to="/">Home</NavLink></li> 
        </ul> 
      </div> 

    );
  }
}
 
export default NavBar;