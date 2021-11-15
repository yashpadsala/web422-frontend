import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import '../assets/css/App.css';
import '../assets/css/Header.css';
import logo from '../assets/image/logo.jpg';

const header = () => {
    return (
        
        <div className='container-fiuid'>
            <div className='navigation'>
            <a href="/"><img className='img' src={logo} alt="Website Logo"></img></a>
            <button className="button">Search</button>
            <input className="searchBar" type="text" placeholder="Search.."></input>
            <Link className='a' to='category'>Category</Link>
            <Link className='a' to="signup">Sign Up</Link>
            <Link className="a" to="products">Products</Link>
                       
            </div>

        </div>
    )
}

export default header;
