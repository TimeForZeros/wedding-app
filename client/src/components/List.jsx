import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

class List extends React.Component {
  state = { guests: [] };
  componentDidMount() {
    axios
      .get('http://localhost:5000/users/guest',{
        method: 'GET',
        headers: { 'content-type': 'application/json' }})
      .then((response) => response.json)
      .then((guests) => {
        console.log('fetch complete');
        console.log(guests);
        this.setState({ guests });
      })
      .catch((err) => console.log(err));
  }
  getList = async () => axios.get('/users/guest');
  render() {
    return (
      <ListGroup>
        <div>
          {this.state.guests.map((guest) => {
            console.log(guest);
            return <ListGroup.Item>{guest}</ListGroup.Item>;
          })}
        </div>
        {/* <ListGroup.Item>Luna</ListGroup.Item>
      <ListGroup.Item>Usagi</ListGroup.Item>
      <ListGroup.Item>Sailor Senshi</ListGroup.Item>
      <ListGroup.Item>Tuxedo Kame</ListGroup.Item>
      <ListGroup.Item>Yaas Queen Beryl</ListGroup.Item> */}
      </ListGroup>
    );
  }
}

export default List;
