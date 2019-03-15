import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './Components/LandingPage';
import Profile from './Components/Profile';
import Signup from './Components/Signup';
import Login from './Components/Login';
import RegisterPage from './Components/RegisterPage';
import Header from './SharedComponents/Header';
import DashboardPortal from './Components/DashboardPortal';

import './App.css';
import PatientPortal from './Components/PatientPortal';

class App extends Component {
  render() {
    return <BrowserRouter>
      <div>
        <Header />

        <div className="container">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={LandingPage} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/RegisterPage" component={RegisterPage} />
            <Route exact path="/DashboardPortal" component={DashboardPortal} />



          </Switch>
        </div>
      </div>
    </BrowserRouter>;
  }
}

export default App;
