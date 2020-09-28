import React from 'react';
import logo from './logo.svg';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import NavbarComp from './components/Navbar';
import Card from 'react-bootstrap/Card';
import User from './components/User';

import './App.css';
import ImageCarousel from './components/Carousel';
import { FormSignup, FormGuest } from './components/Form.jsx';
import List from './components/List';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
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
        <Route path="/user/signup">
          <Card>
            <Card.Body>
              <FormSignup />
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <FormGuest />
            </Card.Body>
          </Card>
        </Route>

        <SignUp />
        <Login />
      </Switch>
    </>
  );
};

export default App;
