import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { IconContext } from "react-icons";
import { GoHeartFill } from "react-icons/go";
import { GiShoppingCart } from "react-icons/gi";
import { IoPersonCircleOutline } from "react-icons/io5";
import "./App.css";

const Nav = () => {
  return (
    
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><h2 aria-current="page" >BROMINE & BARIUM</h2></a>
          <ul className="nav nav-underline d-flex flex-row align-items-center">
            <li className="nav-item">
              <a className="nav-link link-body-emphasis " href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-body-emphasis" href="#"><IconContext.Provider value={{ color: "red", className: "global-class-name" }}><GoHeartFill size={20} /></IconContext.Provider></a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-body-emphasis" href="#"><GiShoppingCart size={20}/></a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle link-body-emphasis" id="navbarDarkDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                <IconContext.Provider value={{ color: "black", className: "global-class-name" }}><IoPersonCircleOutline size={20} /></IconContext.Provider>
              </a>
              <ul className="dropdown-menu dropdown-menu dropdown-menu-lg-end" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><a className="dropdown-item" href="#">Sign Up</a></li>
                <li><a className="dropdown-item" href="#">Log In</a></li>

              </ul>
            </li>

          </ul>
        </div>
      </nav>
   

  )
}

export default Nav
