import React from 'react';

import { Link, Router } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import List from './List';
import { FormGuest, FormSignup } from './Form';
import Guest from './Guest';
import { Switch, Route } from 'react-router-dom';

class User extends React.Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/user/admin">Admin Area</Route>
        <Route path="/user/guest">
          <Guest />
        </Route>
      </Switch>
    );
  }
}

export default User;
