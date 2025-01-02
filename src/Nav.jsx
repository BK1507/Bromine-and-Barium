import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { IconContext } from "react-icons";
import { GoHeartFill } from "react-icons/go";
import { GiShoppingCart } from "react-icons/gi";
import { IoPersonCircleOutline } from "react-icons/io5";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./App.css";
import Marquee from "react-fast-marquee";

import Login from "./Login";
import SignUp from "./SignUp";



const Nav = () => {

 

  return (
    <>
      <div>
        <Marquee className="marqueenav"><span>Free Shipping on all orders!!</span><span>COD available in PAN India!!</span><span>Free Shipping on all orders!!</span><span>COD available in PAN India!!</span></Marquee>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><h2 aria-current="page" style={{ fontFamily: 'fantasy' }}>BROMINE & BARIUM</h2></a>
            <ul className="nav nav-underline d-flex flex-row align-items-center">
              <li className="nav-item">
                <a className="nav-link link-body-emphasis " href="/Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-body-emphasis" href="/Wishlist"><IconContext.Provider value={{ color: "red", className: "global-class-name" }}><GoHeartFill size={20} /></IconContext.Provider></a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-body-emphasis" href="/Cart"><GiShoppingCart size={20} /></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle link-body-emphasis" id="navbarDarkDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  <IconContext.Provider value={{ color: "black", className: "global-class-name" }}><IoPersonCircleOutline size={20} /></IconContext.Provider>
                </a>
                <ul className="dropdown-menu dropdown-menu dropdown-menu-lg-end" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li>
                  <Popup contentStyle={{ width: 'fit-content', height: 'fit-content' }} trigger={<button className="dropdown-item" >Sign Up</button>} position={'left top'}>
                      <div>
                        <SignUp />
                      </div>
                    </Popup>
                    </li>
                  <li>
                    <Popup contentStyle={{ width: 'fit-content', height: 'fit-content' }} trigger={<button className="dropdown-item" >Log In</button>} position={'left top'}>
                      <div>
                        <Login />
                      </div>
                    </Popup>
                  </li>

                </ul>
              </li>

            </ul>

          </div>

        </nav>

      </div>
      
    </>
  )
}

export default Nav
