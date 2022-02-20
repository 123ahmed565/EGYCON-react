import React, { Component } from 'react';
import facebook from './Facebook.png';
import twitter from './Twitter.png';
import instgram from './Instagram-logo.png';
import logo from './Logo.png';
class Navbar extends Component {
    state = {  }
    render() { 
        return (<nav className="navbar navbar-expand-lg navbar-light" >

        <a href="#" className="navbar-brand text-success fw-bolder ">
            <img src={logo} alt="this is logo" style={{width:"200px",marginLeft:"15px"}}/></a>
        <button className="navbar-toggler btn btn-outline-danger" type="button" data-bs-target="#toggleMenu"
            data-bs-toggle="collapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="toggleMenu" >
            <ul className="navbar-nav text-center ms-auto " style={{marginRight:"auto",marginLeft:"auto"}}>
                <li className="nav-item  mx-3"><a href="#" style={{color:"#cb3398" , fontSize:"26px" ,fontFamily:"Quicksand",fontWeight:"bold"}}  className="nav-link"><strong>Home</strong></a></li>
                <li className="nav-item mx-3">
                    <a href="#" className="nav-link" style={{color:"#cb3398" , fontSize:"26px",fontFamily:"Quicksand",fontWeight:"bold"}} ><strong>Join us</strong></a>
                </li>
                <li className="nav-item mx-3">
                    <a href="#" className="nav-link"style={{color:"#cb3398" , fontSize:"26px",fontFamily:"Quicksand",fontWeight:"bold"}} ><strong>About us</strong></a>
                </li>
                <li className="nav-item mx-3">
                    <a href="#" className="nav-link" style={{color:"#cb3398" , fontSize:"26px",fontFamily:"Quicksand",fontWeight:"bold"}} ><strong>Contact us</strong></a>
                </li>
            </ul>
            <ul className="navbar-nav text-center ms-auto " style={{marginRight:"30px"}}>
                <li>
                    <a href="https://www.instagram.com/egycon.me/?hl=en" target="_blank" >
                        <img src={instgram} className="m-2"/>
                    </a>
                </li>
                <li className="nav-item ">
                <a href="https://www.facebook.com/egyconvention/"  target="_blank">
                   <img src={facebook} className="m-2 "/> 
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/egypt_con" target="_blank" >
                        <img src={twitter} className="m-2"/>
                    </a>
                </li>  
            </ul>  
        </div>
</nav> );
    }
}
 
export default Navbar;