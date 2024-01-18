import React from "react";
import Navbar from "react-bootstrap/Navbar";
//import Nav from "react-bootstrap/Nav";
import { mainBody, about } from "../editable-stuff/config.js";
//import { NavLink } from "./home/migration";

const Navigation = React.forwardRef((props, ref) => {
  const navbarMenuRef = React.useRef();
 
  return (
    <Navbar
      ref={navbarMenuRef}
      className={"px-3 fixed-top navbar-background"}
      expand="lg"
    >
      <Navbar.Brand 
        href={process.env.PUBLIC_URL + "/#home"}  
      >
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Brand
        className="nav-item lead"
        href={process.env.PUBLIC_URL + "/#projects"}
      >
        Projects
      </Navbar.Brand>
      <Navbar.Brand
        className="nav-item lead"
        href={about.resume}
        target="_blank"
        rel="noreferrer noopener"
      >
        Resume
      </Navbar.Brand>
      <Navbar.Brand
        className="nav-item lead"
        href={process.env.PUBLIC_URL + "/#aboutme"}
      >
        About
      </Navbar.Brand>
      <Navbar.Brand
        className="nav-item lead"
        href={process.env.PUBLIC_URL + "/#skills"}
      >
        Skills
      </Navbar.Brand>
    </Navbar>
  );
});

export default Navigation;
