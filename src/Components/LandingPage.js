import React, { Component } from 'react';
import Login from './Login';
import { Router } from 'react-router';


class LandingPage extends Component {
    
    render() {
        return (
            <div className="text-center body">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img className="imageLanding"/>
                <h1 className="titleLanding">Welcome to your IoT Health Portal</h1>
                <br></br>
                {/* <button type="button" class="btn btn-primary active"><link a="src/Components/Login.js">
            Let's start!</link></button> */}
            <a href="login"><button className="btn active">Get Started!</button></a>

           

            </div>
        );
    }
}

export default LandingPage