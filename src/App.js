
import './App.css'
import Menu from './Menu'
// import Menu1 from './Menu1'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import About from './components/About';
 import Commenti from './components/Commenti'
import Home from './components/Home';
import Contatti from './components/Contatti' 



function App() {
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
   
    
       
      <div className="App">
        <Router>
        <Menu menuData={menuData}/>
        

          <Routes>

            {/* {menuData.map(page => (

                <Route exact path={page.path} component={page.component} key={page.name} />
                
            ))} */}
            
            <Route path="/about" element={<About />} />           
            <Route path="/contatti" element={<Contatti />} />         
            <Route path="/" element={<Home />} />
            <Route path="/commenti" element={<Commenti />} />
    
          </Routes>
        </Router>
    </div>

  );
}

export default App;
