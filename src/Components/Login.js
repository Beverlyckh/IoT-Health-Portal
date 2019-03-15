import React, { Component } from 'react';
import DashboardPortal from './DashboardPortal';
import {Redirect} from 'react-router-dom'
class Login extends Component {

    state = {
        redirect:false
    }
    submit = ()=>{
      this.setState({redirect:true})

    }

    render() {

        if(this.state.redirect){
           return (  <Redirect to="/DashboardPortal" />)
        }
        return (
          <div class="test d-flex">
          <div class="login-form mx-auto my-auto">
              <form >
              <br></br>
              <br></br>
              <br></br>
                  <h2 class="text-center">Login</h2>
                 
                 
                  <div class="form-group">
                      <div class="input-group">
                          <span class="input-group-addon"><i class="fa fa-user"></i></span>
                          <input type="text" class="form-control" name="username" placeholder="Hospital #ID" required="required"></input>
                      </div>
                  </div>
                  <div class="form-group">
                      <div class="input-group">
                          <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                          <input type="password" class="form-control" name="password" placeholder="ID Key" required="required"></input>
                      </div>
                  </div>

                  <div class="form-group">
                      <a href="DashboardPortal"> <button onClick={this.submit} className="btn active"> Sign in</button></a>
                  
                  </div>
                  <div class="clearfix">
                      <label class="pull-left checkbox-inline"><input type="checkbox"/> Remember me </label>



                  </div>
              </form>
              <div class="hint-text small">Don't have an account? <a href="RegisterPage" class="text">Register Now!</a></div>
          </div>
          </div>
            
        );
    }
}

export default Login;