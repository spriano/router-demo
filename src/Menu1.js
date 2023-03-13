import React from 'react'

import About from './components/About';
 import Commenti from './components/Commenti'
import Home from './components/Home';
import Contatti from './components/Contatti'

import {Link, BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const Menu1 = () => {
  return (
    <Router>
    <div>
        <ul className='nav'>
            <li><Link to="/">Home </Link></li>
            <li><Link to="/about">About </Link></li>
            <li><Link to="/contatti">Contatti</Link></li>
        </ul>
      <Routes>
          <Route path="/about" element={<About />} />           
          <Route path="/contatti" element={<Contatti />} />         
          <Route path="/" element={<Home />} />
            
        </Routes> 
    </div>
    </Router>
  )
}

export default Menu1
