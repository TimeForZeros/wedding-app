import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

class FormGuest extends React.Component {
  constructor() {
    super();
    this.state = { name: '', email: '' /* going: true */ };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = this.state;
    try {
      const res = await axios.post('/users/guest/add', {
        data,
      });
      console.log(res.status);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { name, email } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="string"
            name="name"
            placeholder="Tupac Shakur"
            value={name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="name@example.com"
            value={email}
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

export default FormGuest;
