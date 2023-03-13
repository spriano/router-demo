

import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import { Nav, Navbar,Container } from "react-bootstrap";
// import {About,Commenti,Home,Contatti} from './components'
 import About from './components/About';
 import Commenti from './components/Commenti'
import Home from './components/Home';
import Contatti from './components/Contatti' 




function Menu() {
  const menuData=[
    {
      path:"/",
      name: "Home",
      component: Home
    },
    {
      path:"/about",
      name: 'About',
      component: About
    },
    {
      path:"/contatti",
      name: 'Contatti',
      component: Contatti
    },
    {
      path:"/commenti",
      name: "Commenti",
      component: Commenti
    }
  ]
  
  return (
    <Router>
      <Navbar bg="primary" variant="dark" expand='md'>
        <Container >
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-ullrightnavbar-nav">
            <Nav  className="ms-auto">
              {
                menuData.map((item)=>(
                  <Nav.Link as={Link} to={item.path} key={item.name} >
                    {item.name}
                  </Nav.Link >

                ))
              }
            
                
             </Nav> 

          </Navbar.Collapse>
        </Container>
      </Navbar>

<Routes>
                {
                menuData.map((item)=>(
                  <Route path={item.path} key={item.name} component={item.component}/>
                 
      
                 
                ))} 

              
          {/* <Route path="/about" element={<About />} />           
          <Route path="/contatti" element={<Contatti />} />         
          <Route path="/" element={<Home />} />
          <Route path="/commenti" element={<Commenti/>} />  */}
           

</Routes>
</Router>
  )
}

export default Menu;
