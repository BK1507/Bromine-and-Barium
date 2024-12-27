import { useState } from "react";
import "./ProductDescription.css";
import Nav from "./Nav";
import img1 from './assets/Front8.jpeg';
import img2 from './assets/img8.jpeg';
import { BsFillHandbagFill } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";
const images = [img1, img2];
function ProductDescription() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleProductPrev = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  };
  const handleProductNext = () => {
    setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
  };
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <Nav />
      <br />
      <div className="carousel-container">
        <div className="carousel">
          <button onClick={handleProductPrev} className="nav-button">❮ </button>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
          <button onClick={handleProductNext} className="nav-button"> ❯ </button>
          <div className="thumbnails">
            {
              images.map((image, index) => (
                <img key={index} src={image} alt={`Thumbnail ${index}`}
                  className={`thumbnail ${index === currentIndex ? "active" : ""}`}
                  onClick={() => handleThumbnailClick(index)} />))}
          </div>

        </div>
        <div className="description">
          <h2 style={{fontWeight:{}}}>Skeleton Perch Tee</h2>
          <h3>Rs. 1899/-</h3>
          <p>Unleash your bold style with this captivating T-Shirt design featuring a Grasshopper perched delicately on a skeletal hand.</p>
          <b><p>Stock Left</p></b>

          <h4>Size</h4>
          <div>
            <button>XS</button>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>XXL</button>
          </div>

          <div>
            <button>Add to cart <GiShoppingCart size={20} /></button>
            <button>Buy Now <BsFillHandbagFill size={20} /></button>
          </div>
        </div>
      </div>
    </>
  );
} export default ProductDescription;