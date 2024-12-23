import './App.css';
import { useEffect, useState } from 'react';
import { IconContext } from "react-icons";
import { GoHeartFill } from "react-icons/go";
import { GiShoppingCart } from "react-icons/gi";
import img1 from './assets/Tshirt.png';
import img2 from './assets/img1.jpeg';
import img3 from './assets/img2.jpeg';
import img4 from './assets/img3.jpeg';
import img5 from './assets/img4.jpeg';
import img6 from './assets/img5.jpeg';
import img7 from './assets/img6.jpeg';
import img8 from './assets/img7.jpeg';

const Slider= () => {
        const [active, setActive] = useState(0);  
        let items= document.querySelectorAll('.item');      
        const loadShow = () => {
                let items= document.querySelectorAll('.item');
                let stt = 0;
                items[active].style.transform = 'none';
                items[active].style.zIndex = 1;
                items[active].style.filter = 'none';
                items[active].style.opacity = 1;
                for (var i = active + 1; i < items.length; i++) {
                        stt++;
                        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
                        items[i].style.zIndex = -stt;
                        items[i].style.filter = 'blur(5px)';
                        items[i].style.opacity = stt > 2 ? 0 : 0.6;

                }
                stt = 0;
                for (var j = active - 1; j >= 0; j--) {
                        stt++;
                        items[j].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
                        items[j].style.zIndex = -stt;
                        items[j].style.filter = 'blur(5px)';
                        items[j].style.opacity = stt > 2 ? 0 : 0.6;
                }
        };
        useEffect(() => {
                loadShow();
        }, [active]); 
        
        const handleNext = () => { if (active + 1 < items.length) setActive(active + 1); };
        const handlePrev = () => { if (active - 1 >= 0) setActive(active - 1); };
        return (
                <div className="slider-container">
                       <center><h2>OUR PRODUCTS</h2></center>
                       <br/>
                        <div className="slider">
                        <button id="prev" onClick={handlePrev}>&lt;</button>
                                <div className="card item">
                                        <img src={img1} alt="hoodie" />
                                        <div className="card-body">
                                                 <IconContext.Provider value={{ color: "red", className: "global-class-name" }}> <GoHeartFill size={20} /> </IconContext.Provider>
                                                <IconContext.Provider value={{ color: "black", className: "global-class-name" }}> <GiShoppingCart size={20} /> </IconContext.Provider>
                                        </div>
                                </div>
                                <div className="card item">
                                        <img src={img2} alt="hoodie" />
                                        <div className="card-body">
                                                 <IconContext.Provider value={{ color: "red", className: "global-class-name" }}> <GoHeartFill size={20} /> </IconContext.Provider>
                                                <IconContext.Provider value={{ color: "black", className: "global-class-name" }}> <GiShoppingCart size={20} /> </IconContext.Provider>
                                        </div>
                                </div>
                                <div className="card item">
                                        <img src={img3} alt="hoodie" />
                                        <div className="card-body">
                                                 <IconContext.Provider value={{ color: "red", className: "global-class-name" }}> <GoHeartFill size={20} /> </IconContext.Provider>
                                                <IconContext.Provider value={{ color: "black", className: "global-class-name" }}> <GiShoppingCart size={20} /> </IconContext.Provider>
                                        </div>
                                </div>
                                <div className="card item">
                                        <img src={img4} alt="hoodie" />
                                        <div className="card-body">
                                                 <IconContext.Provider value={{ color: "red", className: "global-class-name" }}> <GoHeartFill size={20} /> </IconContext.Provider>
                                                <IconContext.Provider value={{ color: "black", className: "global-class-name" }}> <GiShoppingCart size={20} /> </IconContext.Provider>
                                        </div>
                                </div>
                                <div className="card item">
                                        <img src={img5} alt="hoodie" />
                                        <div className="card-body">
                                                 <IconContext.Provider value={{ color: "red", className: "global-class-name" }}> <GoHeartFill size={20} /> </IconContext.Provider>
                                                <IconContext.Provider value={{ color: "black", className: "global-class-name" }}> <GiShoppingCart size={20} /> </IconContext.Provider>
                                        </div>
                                </div>
                                <div className="card item">
                                        <img src={img6} alt="hoodie" />
                                        <div className="card-body">
                                                 <IconContext.Provider value={{ color: "red", className: "global-class-name" }}> <GoHeartFill size={20} /> </IconContext.Provider>
                                                <IconContext.Provider value={{ color: "black", className: "global-class-name" }}> <GiShoppingCart size={20} /> </IconContext.Provider>
                                        </div>
                                </div>
                                <div className="card item">
                                        <img src={img7} alt="hoodie" />
                                        <div className="card-body">
                                                 <IconContext.Provider value={{ color: "red", className: "global-class-name" }}> <GoHeartFill size={20} /> </IconContext.Provider>
                                                <IconContext.Provider value={{ color: "black", className: "global-class-name" }}> <GiShoppingCart size={20} /> </IconContext.Provider>
                                        </div>
                                </div>
                                <div className="card item">
                                        <img src={img8} alt="hoodie" />
                                        <div className="card-body">
                                                 <IconContext.Provider value={{ color: "red", className: "global-class-name" }}> <GoHeartFill size={20} /> </IconContext.Provider>
                                                <IconContext.Provider value={{ color: "black", className: "global-class-name" }}> <GiShoppingCart size={20} /> </IconContext.Provider>
                                        </div>
                                </div>

                                <button id="next" onClick={handleNext}>&gt;</button>
                        </div>
                        
                </div>);
};
export default Slider

