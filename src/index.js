import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Section from './section';



ReactDOM.render( 
<React.Fragment>
{/* <App /> */}
<Navbar/>
<Section/>
</React.Fragment>
,document.getElementById('root'));


