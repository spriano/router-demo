
import './App.css'

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Nav, Navbar,Container } from "react-bootstrap";
import About from './components/About';
import Home from './components/Home';
import Contatti from './components/Contatti'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-ullrightnavbar-nav">
              <Nav className="ml-auto">
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                <Nav.Link as={Link} to={"/contatti"}>Contatti</Nav.Link>               
             </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/about" element={<About />} />           
          <Route path="/contatti" element={<Contatti />} />         
          <Route path="/" element={<Home />} />
            
        </Routes>
      </div>
    </Router>
  );
}

export default App;
