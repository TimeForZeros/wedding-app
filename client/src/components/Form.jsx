import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

class FormSignup extends React.Component {
  state = {
    name: '',
    email: '',
  };
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

class FormGuest extends React.Component {
  constructor() {
    super();
    this.state = { name: '', email: '', going: true };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = this.state;

    axios
      .post('/users/guest/add', {
        data: data,
      })
      .then((res) => {
        console.log(res.status)
      }).catch((err) => console.log(err));;
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="string"
            name="name"
            placeholder="Tupac Shakur"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="name@example.com"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Going?</Form.Label>
          <Form.Control as="select" name="going">
            <option>Yes</option>
            <option>No</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Dietary Restrictions</Form.Label>
          <Form.Control as="select" name="dietaryRestriction" multiple>
            <option>Meat</option>
            <option>Fish</option>
            <option>Shellfish</option>
            <option>Eggs</option>
            <option>Dairy</option>
            <option>Peanuts</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Other Restrictions</Form.Label>
          <Form.Control as="textarea" rows="1" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export { FormSignup, FormGuest };
