import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Switch, Route } from "react-router-dom";
import history from "./utils/history";
import NavBar from './components/header/navbar/Navbar';
import Footer from "./components/footer/Footer";
import UserProfile from './pages/Profile';
import Main from './pages/Main';
import UserRanking from './pages/Ranking';
import UserLogin from './pages/Login';
import UserLogout from './pages/Logout';
import UserSettings from './pages/Settings';


class App extends Component {
state = {
  autoHeight: true
}
  render() {
    return (
  
        <Router history={history}>
          <NavBar />
          <Switch>
            <Route exact path="/profile">
              <UserProfile />
            </Route>
            <Route exact path="/ranking">
              <UserRanking />
            </Route>
            <Route exact path="/login">
              <UserLogin />
            </Route>
            <Route exact path="/logout">
              <UserLogout />
            </Route>
            <Route exact path="/settings">
              <UserSettings />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
          <Footer />
        </Router>
     
    );
  }
}

export default App;
