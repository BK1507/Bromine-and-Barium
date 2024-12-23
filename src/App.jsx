
import Nav from "./Nav"
import Carousel from "./Carousel"
import Marquee from "react-fast-marquee";
import "./App.css";
import Slider from "./Slider";

const App = () => {
  return (
    <div>
      <Marquee className="marquee"><span>Free Shipping on all orders!!</span><span>COD available in PAN India!!</span><span>Free Shipping on all orders!!</span><span>COD available in PAN India!!</span></Marquee>
      <Nav />
      <Carousel />
      <br/>
      <Slider/>
    </div>
    

  )
}

export default App
