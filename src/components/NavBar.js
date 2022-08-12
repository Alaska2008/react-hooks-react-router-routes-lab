import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyles={
    display:"inline-block",
    width:"50px",
    padding:"12px",
    background:"blue",
    textDecoration:"none",
    color:"white",
    margin:"0 6px 6px"
  }
  return (
    <div>{/*{code here}*/}
      <NavLink to="/" exact activeStyle={{background:"darkblue"}} style={linkStyles}>
        Home
      </NavLink>
      <NavLink to="/movies" exact activeStyle={{background:"darkblue"}} style={linkStyles} >
        Movies
      </NavLink>


      <NavLink to="/directors" exact activeStyle={{background:"darkblue"}} style={linkStyles}>
        Directors
      </NavLink>
      <NavLink to="/actors" exact activeStyle={{background:"darkblue"}} style= {linkStyles}>
        Actors
      </NavLink>
    </div>
  )
}

export default NavBar;
