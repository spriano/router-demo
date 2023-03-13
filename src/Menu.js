

import {Link} from "react-router-dom";
import { Nav, Navbar,Container } from "react-bootstrap";
// import {About,Commenti,Home,Contatti} from './components'
 




function Menu(props) {
  
  
  return (
    
      <Navbar bg="primary" variant="dark" expand='md'>
        <Container >
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-ullrightnavbar-nav">
            <Nav  className="ms-auto">
              {
                props.menuData.map((item)=>(
                  <Nav.Link as={Link} to={item.path} key={item.name} >
                    {item.name}
                  </Nav.Link >

                ))
              }
                
             </Nav> 

          </Navbar.Collapse>
        </Container>
      </Navbar>

   )
}

export default Menu;
