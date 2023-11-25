import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { ROLE_ID } from "../globalConstants";
import {
  Badge,
  Button,
  Dropdown,
  FormControl
} from "react-bootstrap";
import { CartState } from '../Reducers/Context';

export default function Dashboard() {

  const adminRoleId = ROLE_ID.Admin
  const customerRoleId = ROLE_ID.Customer;
  const ownerRoleId = ROLE_ID.Owner;

  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  const location = useLocation();
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
              <Nav.Link href="#Home">Menu</Nav.Link>
              {location.pathname.split("/")[1] !== "cart" && (
                <Navbar.Text className="search">
                  <FormControl
                    style={{ width: 500 }}
                    type="search"
                    placeholder="Search a product..."
                    className="m-auto"
                    aria-label="Search"
                    onChange={(e) => {
                      productDispatch({
                        type: "FILTER_BY_SEARCH",
                        payload: e.target.value,
                      });
                    }}
                  />
                </Navbar.Text>
              )}
              <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.slug}
                        className="cartItemImg"
                        alt={prod.title}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.title}</span>
                        <span>$ {prod.price}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
  else if (ownerRoleId === 3){
    return (
      <div>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#">QDine</Navbar.Brand>
            <Nav className="me-auto">

              <Nav.Link href="/OwnerMenu">Owner Menu</Nav.Link>
              <Nav.Link href="/ChefMenu">Chef Menu</Nav.Link>
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

