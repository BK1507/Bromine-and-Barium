import {img1} from './src/assets/Hoodie.png';
// import {img2} from './src/assets/Shirt.png';
// import {img3} from './src/assets/Tshirt.png';
import { GoHeartFill } from "react-icons/go";
import { GiShoppingCart } from "react-icons/gi";
import { IconContext } from "react-icons";
const Slider = () => {
  return (
    <div className="slider">
      
        <div className="item">
                <img src={img1} alt='Hoodie'/>
                <a className="nav-link link-body-emphasis" href="#"><IconContext.Provider value={{ color: "red", className: "global-class-name" }}><GoHeartFill size={20} /></IconContext.Provider></a>
        </div> 
        <div className="item">
                <img src={img1} alt='Hoodie'/>
                <a className="nav-link link-body-emphasis" href="#"><IconContext.Provider value={{ color: "red", className: "global-class-name" }}><GiShoppingCart size={20} /></IconContext.Provider></a>        
        </div> 
        <div className="item">
                <img src={img1} alt='Hoodie'/>
               
        </div> 
          
    </div>
  )
}

export default Slider
