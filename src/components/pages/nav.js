import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {


    return (
        <div className = 'section'>
        <nav className ="navbar">
        <div className = "navbar-brand">
          <a className = "navbar-item" href="/">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
          </a>
          
         <NavLink  className ="navbar-item " to="/projects">projects</NavLink>
          <NavLink className="navbar-item "  to="/about">about</NavLink>
          <NavLink className="navbar-item "  to="/contact">contact</NavLink>
          <div className="navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      </div>
    );
}