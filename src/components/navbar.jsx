import React, { Component } from 'react';

//Stateless Functional Component
const NavBar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand"href="#">&nbsp; Total &nbsp;  
        <span className="badge badge-pill bg-info">{totalCounters}</span></a>
        </nav>
    );
};


export default NavBar;