
import './Login.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.bundle.js";

const Login = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col marquee-container'>
                    <marquee className='marquee1' speed={5} onMouseOver={(e)=>{e.target.stop()}} onMouseOut={(e)=>{e.target.start()}} >BROMINE AND BARIUM      BROMINE AND BARIUM</marquee>
                    <br/>
                    <marquee className='marquee2' speed={5} onMouseOver={(e)=>{e.target.stop()}} onMouseOut={(e)=>{e.target.start()}}>BROMINE AND BARIUM      BROMINE AND BARIUM</marquee>
                </div>
                <div className=" col login-container">

                    <h2>Login</h2>
                    <input type="text" placeholder="Phone Number" className="login-input" />
                    <input type="password" placeholder="Password" className="login-input" />
                    <a href='#'>Forgot password</a>
                    <input type="submit" value="Log In" className="login-button" />

                </div>
            </div>
        </div>

    );
};

export default Login;