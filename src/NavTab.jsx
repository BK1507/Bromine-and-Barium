import './Login.css';
import Marquee from 'react-fast-marquee'

const Test = () => {
    return (
        <div className="login-page">
            <div className="marquee-container">
                <div className='marquee' > 
                    <Marquee autoFill={true} pauseOnHover={true}  >BROMINE AND BARIUM </Marquee>
                </div>
                
                <div className='marquee1'>
                    <Marquee autoFill={true} pauseOnHover={true}  > BROMINE AND BARIUM </Marquee>
                </div>
                
            </div>
               
            <div className="login-container">
            <button>X</button>
                <h2>Login</h2>
                <input type="text" placeholder="Phone Number" className="login-input" />
                <input type="password" placeholder="Password" className="login-input" />
                <input type="submit" value="Log In" className="login-button" />
            </div>
        </div>
    );
};

export default Test;