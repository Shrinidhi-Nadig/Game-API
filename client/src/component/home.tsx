import { Link } from "react-router-dom";
import './login.css'
function Home(){
    return ( 
    
     <div>
                <h1> Game Dashboard </h1>
                <Link className="login-btn" to="/login">Login</Link>  <br /> <br /> <br /> 
                <Link className="login-btn" to="/signup"> SignUp</Link>    
                
                
            </div>
    );
}   
export  default Home
