import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import './Styles/App.scss';
import './Styles/Navbar.scss';
import './Styles/Navbar2.scss';
import './Styles/Home.scss';
import './Styles/Product.scss';
import './Styles/Card.scss';

function App() {
  return (
    <Router>
      <Navbar/>
      <Navbar2/>
      
      <Routes>
          <Route path="/product" element={<Product/>}/>
          <Route path="/" element={<Home/>}/>
      </Routes>
      
    </Router>
    
    
   
  );
}

export default App;
