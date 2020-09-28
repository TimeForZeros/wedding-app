import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import NavbarComp from './components/Navbar';
import User from './components/User/User';

import './App.css';
import ImageCarousel from './components/Carousel';

const App = () => (
  <>
    <NavbarComp />
    <Switch>
      <Route path="/home">
        <ImageCarousel />
        <Dashboard />
      </Route>
      <Route path="/user">
        <User />
      </Route>

      <SignUp />
      <Login />
    </Switch>
  </>
);

export default App;
