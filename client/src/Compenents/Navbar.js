import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Logout } from "../features/user/userSlice";
import "./navbar.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Navbarr = () => {
  const user = useSelector((state) => state.Users.users);
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar bg="black" expand="xl">
        <Container >
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto meAuto">
              <Nav.Link className="wa">
                <Link to="/profil/roster">Roster</Link>
              </Nav.Link>
              <Nav.Link className="wa">
                <Link to="/profil/lobbies">Lobbies</Link>
              </Nav.Link>
              <Nav.Link className="wa">
                <Link to="/profil/fixtures">Fixtures</Link>
              </Nav.Link>
              <Nav.Link className="wa">
                <Link to="/profil/players">Players</Link>
              </Nav.Link>
              <NavDropdown title={user.name} id="basic-nav-dropdown" >
                <NavDropdown.Item>
                  <Link to="/profil/edit">Profile </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => {
                    dispatch(Logout());
                    window.location.reload();
                  }}
                >
                  <Link to="/">Log out </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
