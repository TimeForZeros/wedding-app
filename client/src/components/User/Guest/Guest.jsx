import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import List from './List';
import FormSignup from '../../FormSignup';

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
    </Card.Body>
  </Card>
);
class Guest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route path="/user/guest/all">
          <GuestList />
        </Route>
        <Route path="/user/guest/add">
          <AddGuest />
        </Route>
      </Switch>
    );
  }
}
export default Guest;
