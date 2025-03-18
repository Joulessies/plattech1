import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/NavBar.css";

const NavbarAnimation = motion(Navbar);

export default function NavigationBar() {
  return (
    <NavbarAnimation expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Brand
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav">
          <i className="bi bi-list"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/shop">
              Shop
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/signin"
              className="bg-pink text-white rounded"
            >
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavbarAnimation>
  );
}
