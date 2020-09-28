import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const guestDropdown = (
  <NavDropdown title="Guest" id="basic-nav-dropdown">
    <NavDropdown.Item href="/user/guest/add">Add Guest</NavDropdown.Item>
    <NavDropdown.Item href="/user/guest/udate">Edit Guest</NavDropdown.Item>
    <NavDropdown.Item href="/user/guest/delete">Delete Guest</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item>All Guests</NavDropdown.Item>
  </NavDropdown>
);

const guestListDropdown = (
  <NavDropdown title="Guest List" id="basic-nav-dropdown">
    <NavDropdown.Item> Create List</NavDropdown.Item>
    <NavDropdown.Item>Edit List</NavDropdown.Item>
    <NavDropdown.Item>Delete List</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item>All Lists</NavDropdown.Item>
  </NavDropdown>
);

const navCollapse = (
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link>Dashboard</Nav.Link>
      <Nav.Link href="/user/guest/all">Guests</Nav.Link>
      {guestDropdown}
      {guestListDropdown}
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
);

class NavbarComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Victor and Kendi&apos;s Wedding App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {navCollapse}
      </Navbar>
    );
  }
}

export default NavbarComp;
