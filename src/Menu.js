import { Nav, Navbar,NavItem,NavDropdown,Container } from "react-bootstrap";
import {Link} from "react-router-dom";

function Menu() {
  return (
    
      <Navbar bg="dark" variant="dark" expand='lg'>
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-ullrightnavbar-nav">
            <Nav  className="ml-auto">
              <Nav.Link  Link to="/" >Home</Nav.Link>
              <Nav.Link Link to="/about">About</Nav.Link>
              <Nav.Link Link to="/contatti">Contatti</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Menu;
