import './SignUp.css';


const SignUp = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col marquee-container'>
                    <marquee className='marquee1' speed={5} onMouseOver={(e) => { e.target.stop() }} onMouseOut={(e) => { e.target.start() }} >BROMINE AND BARIUM      BROMINE AND BARIUM</marquee>
                    <br />
                    <marquee className='marquee2' speed={5} onMouseOver={(e) => { e.target.stop() }} onMouseOut={(e) => { e.target.start() }}>BROMINE AND BARIUM      BROMINE AND BARIUM</marquee>
                </div>                
                    <div className="col signup-container">
                        <h2>Sign Up</h2>
                        <input type="text" placeholder="Phone Number" className="signup-input" />
                        <input type="password" placeholder="Password" className="signup-input" />
                        <input type="password" placeholder="Confirm Password" className="signup-input" />
                        <input type="submit" value="Sign Up" className="signup-button" />
                    </div>                
            </div>
        </div>


    );
};

export default SignUp;