import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div class="test d-flex">
            <div class="login-form mx-auto my-auto">
                <form  >
                <br></br>
                <br></br>
                <br></br>
                    <h2 class="text-center">Sign in</h2>
                   
                   
                    <div class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-user"></i></span>
                            <input type="text" class="form-control" name="username" placeholder="Username" required="required"></input>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                            <input type="password" class="form-control" name="password" placeholder="Password" required="required"></input>
                        </div>
                    </div>

                    <div class="form-group">

                    <a href="DashboardPortal"><button class="btn btn-success btn-block login-btn">Sign in</button></a>
                    </div>
                    <div class="clearfix">
                        <label class="pull-left checkbox-inline"><input type="checkbox"/> Remember me </label>
                        <a href="#" class="pull-right text-success"> Forgot Password?</a>



                    </div>
                </form>
                <div class="hint-text small">Don't have an account? <a href="login" class="text-success">Register Now!</a></div>
            </div>
            </div>
        );
    }
}
export default Signup;