import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

axios.get('/users/guest').then((res) => {
  console.log('get worked!');
  console.log(res);
})

const List = () => {
  return (
    <ListGroup>
      <ListGroup.Item>Luna</ListGroup.Item>
      <ListGroup.Item>Usagi</ListGroup.Item>
      <ListGroup.Item>Sailor Senshi</ListGroup.Item>
      <ListGroup.Item>Tuxedo Kame</ListGroup.Item>
      <ListGroup.Item>Yaas Queen Beryl</ListGroup.Item>
    </ListGroup>
  );
};

export default List;