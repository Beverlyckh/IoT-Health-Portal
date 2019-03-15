import React, { Component } from 'react';

class Header extends Component{
render(){
    return(
        <div className="container-fluid ">
        <nav className="navbar navbar-expand-lg navbar-light navMenu">
          <a className="navbar-brand IoT" href="/">IoT</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item Menu-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              {/* <li className="nav-item Menu-item active">
                <a className="nav-link" href="about">About <span className="sr-only">(current)</span></a>
              </li> */}
              {/* <li className="nav-item Menu-item active">
                <a className="nav-link" href="profile">Profile <span className="sr-only">(current)</span></a>
              </li> */}
            
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item Menu-item">
                <a className="nav-link" href="/Signup">Sign Up</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link Menu-item" href="/Login">Log In <span class="sr-only">(current)</span></a>
              </li>
             
            </ul>

          </div>
        </nav>
      </div>
    );
}
}

export default Header