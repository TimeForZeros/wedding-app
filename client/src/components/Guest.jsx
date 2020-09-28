import React from 'react';
import { Link, Router } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import List from './List';
import { FormGuest, FormSignup } from './Form';
import { Switch, Route } from 'react-router-dom';

const GuestList = () => (
  <Card>
    <Card.Body>
      <Card.Header>Guest List</Card.Header>
      <List />
    </Card.Body>
  </Card>
);
const AddGuest = () => (
  <Card>
    <Card.Body>
      <Card.Header>Add Guest</Card.Header>
      <FormSignup />
      <FormGuest />
    </Card.Body>
  </Card>
);
class Guest extends React.Component {
  state = {};
  render = () => (
    <Switch>
      <Route path="/user/guest/list">
        <GuestList />
      </Route>
      <Route path="/user/guest/add">
        <AddGuest />
      </Route>
    </Switch>
  );
}
export default Guest;
