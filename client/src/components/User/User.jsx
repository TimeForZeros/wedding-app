import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import FormSignup from '../FormSignup';
import Guest from './Guest/Guest';

const UserSignup = (
  <Card>
    <Card.Body>
      <FormSignup />
    </Card.Body>
  </Card>
);
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route path="/user/admin">Admin Area</Route>
        <Route path="/user/guest">
          <Guest />
        </Route>
        <Route path="/user/signup">{UserSignup}</Route>
      </Switch>
    );
  }
}

export default User;
