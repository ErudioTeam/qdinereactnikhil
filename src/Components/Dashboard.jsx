import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import { ROLE_ID } from "../globalConstants";

export default function Dashboard() {

  const adminRoleId = ROLE_ID.Admin
  const customerRoleId = ROLE_ID.Customer;

  console.log(customerRoleId)

  const roleId = JSON.parse(sessionStorage.getItem('Role_Id'));
  //console.log(roleId)
  const navigate = useNavigate();
  const logout = () => {
    navigate('/');
    // sessionStorage.clear();
  }
  if (adminRoleId === roleId) {
    return (
      <div>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">QDine</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="/users">Users</Nav.Link>
              <Nav.Link href="#manage">Manage</Nav.Link>
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
  else if (customerRoleId === roleId) {
    return (
      <div>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">QDine</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Customer Menu</Nav.Link>
              <Nav.Link href="#pricing">Customer List</Nav.Link>
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
  else {
    return (
      <div>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">QDine</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Owner Features</Nav.Link>
              <Nav.Link href="#pricing">Chef Menu</Nav.Link>
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

