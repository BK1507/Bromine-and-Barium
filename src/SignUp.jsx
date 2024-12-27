import './SignUp.css';


const SignUp = () => {
    return (       
            <div className="signup-container">                                
                <h2>Sign Up</h2>
                <input type="text" placeholder="Phone Number" className="signup-input" />
                <input type="password" placeholder="Password" className="signup-input" />
                <input type="password" placeholder="Confirm Password" className="signup-input" />
                <input type="submit" value="Sign Up" className="signup-button" />                
            </div>
       
    );
};

export default SignUp;