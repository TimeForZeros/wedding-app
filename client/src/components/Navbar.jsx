import React from 'react';
import { Link, Router } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class NavbarComp extends React.Component {
  state = {};
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Link to="/home">
          <Navbar.Brand href="#home">
            Victor and Kendi's Wedding App
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Dashboard</Nav.Link>
            <Link to="/user/guest">
              <Nav.Link href="#link">Guests</Nav.Link>
            </Link>
            <NavDropdown title="Guest" id="basic-nav-dropdown">
              <Link>
                <NavDropdown.Item href="#action/3.1">
                  Add Guest
                </NavDropdown.Item>
              </Link>
              <Link to="/user/guest/update">
                <NavDropdown.Item href="#action/3.3">
                  Edit Guest
                </NavDropdown.Item>
              </Link>
              <Link to="/user/guest/delete">
                <NavDropdown.Item href="#action/3.3">
                  Delete Guest
                </NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link to="user/guest">
                <NavDropdown.Item href="#action/3.4">
                  All Guests
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
            <NavDropdown title="Guest List" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                {' '}
                Create List
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Edit List</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Delete List
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">All Lists</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarComp;