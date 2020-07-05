import React from 'react';
import logo from './logo.svg';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import NavbarComp from './components/Navbar';
import Card from 'react-bootstrap/Card';

import './App.css';
import ImageCarousel from './components/Carousel';
import List from './components/List';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <NavbarComp />
      <Switch>
        <Route path="/hello">
          <ImageCarousel />
        </Route>
        <Card>
          <Card.Body>
            <Card.Header> Guest List</Card.Header>
            <List />
          </Card.Body>
        </Card>
        <Dashboard />
        <SignUp />
        <Login />
      </Switch>
    </>
  );
};

export default App;
