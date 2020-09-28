import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

const isGoing = (going) => (going ? 'success' : 'danger');
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { guests: [] };
  }

  async componentDidMount() {
    try {
      const res = await axios.get('http://localhost:5000/users/guest', {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      });
      this.setState({ guests: [...res.data] });
    } catch (error) {
      console.error(error);
    }
  }

  getList() {
    this.axios.get('/users/guest');
  }

  render() {
    const { guests } = this.state;
    return (
      <ListGroup>
        {guests.map((guest) => (
          <ListGroup.Item variant={isGoing(guest.going)} eventKey={guest.id}>
            {guest.name}
          </ListGroup.Item>
        ))}
        {/* <ListGroup.Item>Luna</ListGroup.Item> */}
        {/* <ListGroup.Item>Usagi</ListGroup.Item>
      <ListGroup.Item>Sailor Senshi</ListGroup.Item>
      <ListGroup.Item>Tuxedo Kame</ListGroup.Item>
      <ListGroup.Item>Yaas Queen Beryl</ListGroup.Item> */}
      </ListGroup>
    );
  }
}

export default List;
