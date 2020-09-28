import React from 'react';

import { Link, Router } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import List from './Guest/List';
import { FormGuest, FormSignup } from '../Form';
import Guest from './Guest/Guest';
import { Switch, Route } from 'react-router-dom';

const UserSignup = () => (
  <>
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
  </>
);
class User extends React.Component {
  state = {};
  render = () => (
    <Switch>
      <Route path="/user/admin">Admin Area</Route>
      <Route path="/user/guest">
        <Guest />
      </Route>
      <Route path="/user/signup">
        <UserSignup />
      </Route>
    </Switch>
  );
}

export default User;
