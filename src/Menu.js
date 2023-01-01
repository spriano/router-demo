import { Nav, Navbar,Container } from "react-bootstrap";
import {Link} from "react-router-dom";

function Menu() {
  return (
    
      <Navbar bg="primary" variant="dark" expand='md'>
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-ullrightnavbar-nav">
            <Nav  className="ms-auto">
            
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                <Nav.Link as={Link} to={"/contatti"}>Contatti</Nav.Link>               
             </Nav> 
             
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Menu;
