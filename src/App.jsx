
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ProductDescription from "./ProductDescription";
import Home from './Home';
import Login from './Login';
import Test from './NavTab';
import SignUp from './SignUp';
import Cart from './Cart';
import Wishlist from './Wishlist';
const App = () => {
  return (
    <div>      
      <Router>
        <Routes>
          <Route path = "/ProductDescription" element = {<ProductDescription/>}/> 
          <Route path = "/Home" element = {<Home/>}/> 
          <Route path="/Login" element={<Login/>} />
          <Route path="/Test" element={<Test/>} />         
          <Route path="/Signup" element={<SignUp/>} /> 
          <Route path="/Cart" element={<Cart/>} /> 
          <Route path="/Wishlist" element={<Wishlist/>} /> 
        </Routes>
      </Router>
    </div>
    

  )
}

export default App
