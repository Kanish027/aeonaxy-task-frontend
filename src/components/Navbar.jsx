import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/User";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const handleLogout = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    dispatch(logoutUser());
  };

  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary shadow-sm mb-3"
        >
          <Container fluid>
            <Navbar.Brand className="text-danger">Dribbble</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start gap-2 flex-grow-1 pe-3">
                  <Nav.Link>
                    <small className="fw-semibold">Inspiration</small>
                  </Nav.Link>
                  <Nav.Link>
                    <small className="fw-semibold">Find Work</small>
                  </Nav.Link>
                  <Nav.Link>
                    <small className="fw-semibold">Learn Design</small>
                  </Nav.Link>
                  <Nav.Link>
                    <small className="fw-semibold">Go Pro</small>
                  </Nav.Link>
                  <Nav.Link>
                    <small className="fw-semibold">Hire Designers</small>
                  </Nav.Link>
                </Nav>
                <Form className="d-flex align-items-center gap-3">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 bg-secondary-subtle"
                    aria-label="Search"
                  />
                  <div>
                    <i className="fa-solid text-secondary fa-briefcase"></i>
                  </div>
                  <div>
                    <Link to={"/update"}>
                      <Avatar
                        sx={{ width: 25, height: 25 }}
                        src={
                          user && user.avatar ? user.avatar.avatar_url : null
                        }
                      />
                    </Link>
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => handleLogout(e)}
                  >
                    Logout
                  </button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
