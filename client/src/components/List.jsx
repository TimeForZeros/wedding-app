import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

const guestArr = ['hello', 'hi'];
console.log(guestArr);
const List = () => {
const getList = async () => axios.get('/users/guest');
getList().then((res) =>
  res.data.forEach((guest) => {
    guestArr.push(guest.name);
  }),
);
  return (
    <ListGroup>
      <div>
      {guestArr.forEach((guest) => {
        console.log(guest);
        return (<ListGroup.Item>{guest}</ListGroup.Item>)
      })}
      </div>
      {/* <ListGroup.Item>Luna</ListGroup.Item>
      <ListGroup.Item>Usagi</ListGroup.Item>
      <ListGroup.Item>Sailor Senshi</ListGroup.Item>
      <ListGroup.Item>Tuxedo Kame</ListGroup.Item>
      <ListGroup.Item>Yaas Queen Beryl</ListGroup.Item> */}
    </ListGroup>
  );
};

export default List;
